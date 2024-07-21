
/// DOM Manipulation

// 1. Create a new div element with the id "myDiv" and the class "myClass"


const id1 = document.getElementById("id1");

id1.innerHTML = "Hello World";
id1.style = "color: red";

const class1 = document.querySelector(".class1");

// const class1 = document.getElementsByClassName("class1")[0];

class1.innerHTML = "gaurav ghuge";
class1.style = "color: red";


// 2. Append the div element to the body 

const body = document.body;

// create a new div element

const div = document.createElement("div");
div.innerHTML = "this is a new div";
div.style = "color: red; border: 1px solid black";

// const div1 = body.appendChild("section");

// div1.innerHTML = "this is a new div";
// div1.style = "color: red; border: 1px solid black";
// console.log(div);   


const id2 = document.getElementById("id2");

id2.append("div");

id2.appendChild(div);

id2.style = "color: red; border: 1px solid black; box-shadow: 0 0 10px #000";



// id2.remove();

id2.removeAttribute("style");

id1.removeAttribute("innerHTML");




/// event Listeners 

const btn = document.getElementById("btn");


document.addEventListener("click", myFunction)

function myFunction() {
  console.log("Hello World")

  document.body.style = "background-color: gray;"

}


/// change the border 
