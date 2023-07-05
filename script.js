let display= document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element => {element.addEventListener("click",calc)});

function calc(e)
{
if (e.target.textContent === "AC") {
  display.innerText= "";
} else if (e.target.textContent === "DEL") {
  display.innerText = display.innerText.slice(0, -1);
} else if (e.target.textContent === "=") {
  display.innerText = eval(display.innerText);
} else {
  display.innerText += e.target.textContent;
}       
display.scrollLeft = display.scrollWidth;  
}

function onMouseDown(button)
{
    button.style.backgroundColor="orange";
}
function onMouseUp(button)
{
    button.style.backgroundColor="rgb(37, 37, 37)";
}
