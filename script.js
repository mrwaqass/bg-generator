var _ = require('lodash');
console.log(_);
var css = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css2.textContent = color1.value + ", " + color2.value;
    css.textContent = "background: " + body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);