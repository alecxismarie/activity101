var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";  
}

function addListAfterClick () {
    if (inputlength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputlength() > 0 && event.code === "Enter") {
        createListElement();
   }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";
}
color1.addEventListener("input", setGradient);
   
color2.addEventListener("input", setGradient);

