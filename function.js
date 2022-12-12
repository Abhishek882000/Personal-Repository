// const listElement = document.getElementById("listItem3");
// const listGroup = document.getElementById("items");

// listElement.style.backgroundColor = "green";
// listGroup.style.fontWeight = "bold";

// Task GetElementsbyTAgName

// let node = document.createElement('li');
// node.appendChild(document.createTextNode('Item 5'));
// document.querySelector('.list-group-item:nth-child(4)').appendChild(node);
// const collection = document.getElementsByTagName("li");
// document.getElementById("listItem3").innerHTML = collection[4].innerHTML;
// const listElem = document.getElementsByClassName("list-group-item");


// QuerySelector && QuerySelectorALL

// const queryAll = document.querySelectorAll(".list-group-item");
// for (let i in queryAll) {
//     if (i % 2 == 0) {
//         queryAll[i].style.backgroundColor = "green";
//         queryAll[i].style.color = "white";
//     }
// }
// queryAll[1].style.color = "green";
// console.log(queryAll[1]);


// Creating Nodes and Modifying Dom

// const listGroup = document.getElementById("items");
// console.log(listGroup.parentElement.parentElement);
// console.log(listGroup.lastElementChild);
// console.log(listGroup.lastChild);
// console.log(listGroup.childNodes);
// console.log(listGroup.children[1]);
// console.log(listGroup.firstChild);
// console.log(listGroup.firstElementChild);
// console.log(listGroup.firstElementChild.textContent);
// console.log(listGroup.nextSibling);
// console.log(listGroup.nextElementSibling);
// console.log(listGroup.previousSibling);

// let newElement = document.createElement('div');
// newElement.className = "hello";
// let newDivText = document.createTextNode("Hello");
// newElement.appendChild(newDivText);
// newElement.setAttribute("title", "newTitle");
// console.log(newElement);



// // Delete and Edit functionality

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e) {
//     e.preventDefault();

//     var newItem = document.getElementById('item').value;

//     var li = document.createElement('li');
//     li.className = 'list-group-item';

//     li.appendChild(document.createTextNode(newItem));


//     var deleteBtn = document.createElement('button');


//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


//     deleteBtn.appendChild(document.createTextNode('X'));


//     li.appendChild(deleteBtn);


//     itemList.appendChild(li);
// }


// function removeItem(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are You Sure?')) {
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }


// function filterItems(e) {

//     var text = e.target.value.toLowerCase();

//     var items = itemList.getElementsByTagName('li');

//     Array.from(items).forEach(function (item) {
//         var itemName = item.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }



// //Filter functionality

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// filter.addEventListener('keyup', filterItems);


// function filterItems(e) {

//     var text = e.target.value.toLowerCase();

//     var items = itemList.getElementsByTagName('li');

//     Array.from(items).forEach(function (item) {
//         var itemName = item.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }


// //Booking Appointment app

// let nameInput = document.getElementById("name");
// let emailInput = document.getElementById("email");
// const submitBtn = document.getElementById("submit");

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     localStorage.setItem("name", nameInput.value);
//     localStorage.setItem("email", emailInput.value);
// });


let ul = document.getElementById("users");
function addUserData(event) {
    event.preventDefault();
    //console.log(event);
    const name = event.target.name.value;
    const email = event.target.email.value;

    // localStorage.setItem(email, name);
    let obj = {
        name: name,
        email: email
    };
    const serialized_data = JSON.stringify(obj);
    localStorage.setItem("user_data" + email, serialized_data);
    for (let o in localStorage) {
        if (o.startsWith("user_data")) {
            console.log(localStorage[o]);
        }
    }
    addNewItem(obj);
}


function addNewItem(object) {
    var ul = document.getElementById("users");
    var li = document.createElement("li");
    li.appendChild(
        document.createTextNode(object.email)
    ); // li.appendChild()

    console.log(document.createElement("i"));
    var a1 = document.createElement("input");
    a1.id = "yash";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", function () {
        console.log(object);
        document.getElementById("name").value = object.name;
        document.getElementById("email").value = object.email;
        li.remove();
    });
    a1.className = "delete";
    a1.style.border = "2px solid green";

    li.appendChild(a1);
    var a = document.createElement("input");
    a.type = "button";
    a.value = "delete";
    a.addEventListener("click", function () {
        localStorage.removeItem("user_data" + object.email);

        li.remove();
    });
    a.className = "delete";
    a.style.border = "2px solid red";

    li.appendChild(a);
    ul.appendChild(li);
}


let obj = {
    num: 2,
}
let obj7 = {
    num: 5,
}
let student = {
    age: 20,
}
// let addToThis = function (obj) {
//     return this.num + obj;
// }
let addToThis = function (a, b, c) {
    return this.num + a + b + c;
}
let getAge = function () {
    return this.age;
}
// console.log(addToThis.call(obj, 3));
let arr = [1, 2, 3];
// console.log(addToThis.apply(obj, arr));
// console.log(addToThis.apply(obj7, arr));
let bound = addToThis.bind(obj);
let bound2 = getAge.bind(student);
console.log(bound2());
console.log(bound(1, 2, 3));


let multiply = function (x, y) {
    console.log(x * y);
}
let mulByTwo = multiply.bind(this, 2);
mulByTwo(5);
let mulByThree = multiply.bind(this, 3);
mulByThree(5);




//Promise and callback
const posts = [
    {
        title: 'Post One',
        body: 'This is post one',
        timestamp: setInterval(new Date().getSeconds(), 1000)
    },
    {
        title: 'Post Two',
        body: 'This is post one',
        timestamp: setInterval(new Date().getSeconds(), 1000)
    },
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} created ${post.timestamp}seconds ago</li> `
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}
function create4thPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}



createPosts({
    title: 'Post Three',
    body: 'This is post three',
    timestamp: setInterval(new Date().getSeconds(), 1000)
})
    .then(getPosts)
    .catch(err => console.log(err));

create4thPost({
    title: 'Post four',
    body: 'This is post four',
    timestamp: setInterval(new Date().getSeconds(), 1000)
})
    .then(createPosts)
    .catch(err => console.log(err));

console.log(posts);



getPosts();

var interval = null;

function deletepost() {
    if (posts.length > 0) {
        console.log(posts);
        posts.pop();
    }
    else {
        console.log("Nothing to delete");
        clearInterval(interval);
    }
}
setTimeout(() => {
    interval = setInterval(() => {
        deletepost();

        getPosts();
    }, 2000);
}, 4000);


