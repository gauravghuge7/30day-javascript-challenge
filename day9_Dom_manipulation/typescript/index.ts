// 1. Create a new div element with the id "myDiv" and the class "myClass"

const id1 = document.getElementById("id1") as HTMLElement;
if (id1) {
    id1.innerHTML = "Hello World";
    id1.style.color = "red";
}

const class1 = document.querySelector(".class1") as HTMLElement;
// const class1 = document.getElementsByClassName("class1")[0] as HTMLElement;

if (class1) {
    class1.innerHTML = "gaurav ghuge";
    class1.style.color = "red";
}

// 2. Append the div element to the body 

const body = document.body;

// Create a new div element
const div = document.createElement("div");
div.id = "myDiv";
div.className = "myClass";
div.innerHTML = "this is a new div";
div.style.color = "red";
div.style.border = "1px solid black";

// Append the new div to the body
body.appendChild(div);

// Manipulate id2 element
const id2 = document.getElementById("id2") as HTMLElement;
if (id2) {
    id2.appendChild(div);
    id2.style.color = "red";
    id2.style.border = "1px solid black";
    id2.style.boxShadow = "0 0 10px #000";

    // Remove the style attribute
    id2.removeAttribute("style");
}

// Remove the innerHTML attribute from id1
if (id1) {
    id1.removeAttribute("innerHTML");
}

// Event Listeners
const btn = document.getElementById("btn") as HTMLButtonElement;
if (btn) {
    btn.addEventListener("click", myFunction);
}

function myFunction(): void {
    console.log("Hello World");
    document.body.style.backgroundColor = "gray";
}
