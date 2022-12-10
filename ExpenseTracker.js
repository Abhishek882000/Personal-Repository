const submitBtn = document.getElementById("submitBtn");
let amountInput = document.getElementById("amountInput");
let descriptionInput = document.getElementById("descriptionInput");
let categoryInput = document.getElementById("categoryInput");
let itemList = document.getElementById("items");


console.log(itemList);
for (let ob in localStorage) {
    if (ob.startsWith("user_data")) {
        console.log("This is true");
    }
}

submitBtn.addEventListener("click", addExpense);


function addToLocalStorage() {
    let obj = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    };
    const serialized_data = JSON.stringify(obj);
    localStorage.setItem("user_data" + descriptionInput.value, serialized_data);
    for (let o in localStorage) {
        if (o.startsWith("user_data")) {
            console.log(localStorage[o]);
        }
    }
}

function addExpense(e) {

    e.preventDefault();
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(amountInput.value + "-" + descriptionInput.value + "-" + categoryInput.value));

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('E'));
    editBtn.addEventListener("click", removeItem);

    li.appendChild(editBtn);


    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener("click", removeItem);

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    addToLocalStorage();
    amountInput.value = "";
    descriptionInput.value = "";
    categoryInput.value = "Fuel";
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let del_value = li.innerHTML.split("<")[0];
            itemList.removeChild(li);
            li.remove();
            localStorage.removeItem(`user_data${del_value.split("-")[1]}`);
        }
    }
    if (e.target.classList.contains('edit')) {

        let li = e.target.parentElement;
        itemList.removeChild(li);
        li.remove();
        var items = JSON.parse(localStorage.removeItem(`user_data${descriptionInput.value}`));
        console.log("itesm" + items);
        amountInput.value = items.amount;
        descriptionInput.value = items.description;
        categoryInput.value = items.category;
    }
}
