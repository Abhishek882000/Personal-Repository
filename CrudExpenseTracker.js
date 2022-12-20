const submitBtn = document.getElementById("submitBtn");
let amountInput = document.getElementById("amountInput");
let descriptionInput = document.getElementById("descriptionInput");
let categoryInput = document.getElementById("categoryInput");
let itemList = document.getElementById("items");
let mydiv = document.getElementById("mydiv");
let data = "";

mydiv.addEventListener("click", removeItem);


showOutput();

function showOutput() {
    axios({
        method: 'get',
        url: 'https://crudcrud.com/api/219c68bd99e24b258693ec602c5ccc30/ExpenseManager',
    })
        .then(res => {
            for (let obj of res.data) {
                data += `<div class="card mt-3" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">ExpenseAmount : ${obj.expenseAmount}</h5>
                            <p class="card-text">Description : ${obj.description}</p>
                            <a href="#" class="btn btn-primary">Category : ${obj.category}</a>
                            <button id="${obj._id}" class="btn delete badge rounded-pill text-bg-danger">Delete</button>
                            <button id="${obj._id}" class="btn edit badge rounded-pill text-bg-primary">Edit</button>
                        </div>
                </div>`
                mydiv.innerHTML = data;
            }

            console.log(res.data)
        })
        .catch(err => console.log(err));

}

submitBtn.addEventListener("click", addExpense);


function addExpense(e) {
    axios({
        method: "POST",
        url: 'https://crudcrud.com/api/219c68bd99e24b258693ec602c5ccc30/ExpenseManager',
        data: {
            expenseAmount: amountInput.value,
            description: descriptionInput.value,
            category: categoryInput.value
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (reject) {
        console.log(reject);
    })
}

function removeItem(event) {
    if (event.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")) {
            let delete_id = event.target.id;
            console.log(delete_id);
            axios
                .delete("https://crudcrud.com/api/219c68bd99e24b258693ec602c5ccc30/ExpenseManager/" + delete_id)
                .then((res) => {
                    let parentDiv = event.target.parentElement.parentElement;
                    console.log(parentDiv);
                    mydiv.removeChild(parentDiv);
                    alert("User Deleted Successfully");
                })
                .catch((err) => alert(`Error: ${err.message} occurred.`));
        }
    }
    if (event.target.classList.contains("edit")) {
        let delete_id = event.target.id;
        console.log(delete_id);
        axios
            .get("https://crudcrud.com/api/219c68bd99e24b258693ec602c5ccc30/ExpenseManager/" + delete_id)
            .then((res) => {
                let parentDiv = event.target.parentElement.parentElement;
                console.log(parentDiv);
                mydiv.removeChild(parentDiv);
                document.getElementById("amountInput").value = res.data.expenseAmount;
                document.getElementById("descriptionInput").value = res.data.description;
                document.getElementById("categoryInput").value = res.data.category;
            })
            .catch((err) => alert(`Error: ${err.message} occurred.`));

        axios
            .delete("https://crudcrud.com/api/219c68bd99e24b258693ec602c5ccc30/ExpenseManager" + delete_id)
            .then((res) => {
                let parentDiv = event.target.parentElement.parentElement;
                console.log(parentDiv);
                // mydiv.removeChild(parentDiv);
                // alert("User Deleted Successfully");
            })
            .catch((err) => alert(`Error: ${err.message} occurred.`));
    }
}