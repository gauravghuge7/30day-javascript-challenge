
/// keyboard events

const div = document.getElementById('div1');

const ul1 = document.getElementById("ul1");
const li1 = document.getElementById("li1")


document.addEventListener("keydown", (e) => {

    // console.log(e.key);

    console.log(e.keyCode);

    const item = document.createElement('li');
    item.innerHTML = `key ${e.keyCode} is ${e.key} `;



    ul1.appendChild(item);
    


    // console.log(e.target);
    
})


document.addEventListener("")
