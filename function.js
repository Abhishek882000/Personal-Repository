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



// Delete and Edit functionality

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));


    var deleteBtn = document.createElement('button');


    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


    deleteBtn.appendChild(document.createTextNode('X'));


    li.appendChild(deleteBtn);


    itemList.appendChild(li);
}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e) {

    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}