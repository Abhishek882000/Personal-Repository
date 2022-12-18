let data = "";
let mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", removeItem);

function clk() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users?_limit=5',
    })
        .then(res => {
            for (let obj of res.data) {
                data += `<li><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Name : ${obj.name}</h5>
                            <p class="card-text">Username : ${obj.username}</p>
                            <a href="#" class="btn btn-primary">Email : ${obj.email}</a>
                            <button id="${obj.id}" class="btn delete badge rounded-pill text-bg-danger">Delete</button>
                        </div>
                </div></li>`
                mydiv.innerHTML = data;
            }

            console.log(res.data)
        })
        .catch(err => console.log(err));
}

function removeItem(event) {
    //delete expense
    if (event.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")) {
            let delete_id = event.target.id;
            console.log(delete_id);
            axios
                .delete("https://jsonplaceholder.typicode.com/users/" + delete_id)
                .then((res) => {
                    let parentDiv = event.target.parentElement.parentElement;
                    mydiv.removeChild(parentDiv);
                    alert("User Deleted Successfully");
                })
                .catch((err) => alert(`Error: ${err.message} occurred.`));
        }
    }
}

axios
    .post(
        "https://crudcrud.com/api/a65c3d8a11d341d5a89a225e951192bf/appointments",
        "https://jsonplaceholder.typicode.com/users",
        appointment
    )
    .then((res) => {
        function removeItem(event) {
        }
        //edit expense
        if (event.target.classList.contains("edit")) {
            var li = event.target.parentElement;
            var li = event.target.parentElement.parentElement;
            var delete_value = event.target.parentElement.innerHTML.split("<")[0];

            itemList.removeChild(li);
            var values = delete_value.split("-");
            document.getElementById("amount").value = values[0];
            document.getElementById("desc").value = values[1];
            document.getElementById("category").value = values[2];

            axios
                .get("https://jsonplaceholder.typicode.com/users?_limit=5")
                .then((res) => {
                    document.getElementById("name").value = res.data[0].name;
                    document.getElementById("email").value = res.data[1].email;
                    document.getElementById("phone").value = res.data[2].phone;
                    document.getElementById("time").value = res.data[3];
                    document.getElementById("date").value = res.data[4];
                })
                .catch((err) => alert(err));

        }
    });