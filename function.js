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

const queryAll = document.querySelectorAll(".list-group-item");
for (let i in queryAll) {
    if (i % 2 == 0) {
        queryAll[i].style.backgroundColor = "green";
        queryAll[i].style.color = "white";
    }
}
queryAll[1].style.color = "green";
console.log(queryAll[1]);