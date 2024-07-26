


/// basic event handling

const para = document.getElementById('p1');


function changeText() {

    para.innerHTML = 'gaurav ghuge is the done the work by time of day';
}


const button = document.getElementById('btn1');

button.addEventListener("click", changeText);

button.addEventListener("dblclick", () => {

    para.style = "display: none";
})

/// event delegation



