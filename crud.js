let data = "";
let mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", removeItem);


function getdata() {
    clk();
}
getdata();

function clk() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users?_limit=5',
    })
        .then(res => {
            for (let obj of res.data) {
                data += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Name : ${obj.name}</h5>
                            <p class="card-text">Username : ${obj.username}</p>
                            <a href="#" class="btn btn-primary">Email : ${obj.email}</a>
                            <button id="${obj.id}" class="btn delete badge rounded-pill text-bg-danger">Delete</button>
                            <button id="${obj.id}" class="btn edit badge rounded-pill text-bg-primary">Edit</button>
                        </div>
                </div>`
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
            .get("https://jsonplaceholder.typicode.com/users/" + delete_id)
            .then((res) => {
                let parentDiv = event.target.parentElement.parentElement;
                console.log(parentDiv);
                mydiv.removeChild(parentDiv);
                document.getElementById("name").value = res.data.name;
                document.getElementById("email").value = res.data.email;
                document.getElementById("phone").value = res.data.phone;
            })
            .catch((err) => alert(`Error: ${err.message} occurred.`));

        axios
            .delete("https://jsonplaceholder.typicode.com/users/" + delete_id)
            .then((res) => {
                let parentDiv = event.target.parentElement.parentElement;
                console.log(parentDiv);
                // mydiv.removeChild(parentDiv);
                // alert("User Deleted Successfully");
            })
            .catch((err) => alert(`Error: ${err.message} occurred.`));
    }
}
