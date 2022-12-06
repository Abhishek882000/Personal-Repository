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

const listGroup = document.getElementById("items");
console.log(listGroup.parentElement.parentElement);
console.log(listGroup.lastElementChild);
console.log(listGroup.lastChild);
console.log(listGroup.childNodes);
console.log(listGroup.children[1]);
console.log(listGroup.firstChild);
console.log(listGroup.firstElementChild);
console.log(listGroup.firstElementChild.textContent);
console.log(listGroup.nextSibling);
console.log(listGroup.nextElementSibling);
console.log(listGroup.previousSibling);

let newElement = document.createElement('div');
newElement.className = "hello";
let newDivText = document.createTextNode("Hello");
newElement.appendChild(newDivText);
newElement.setAttribute("title", "newTitle");
console.log(newElement);