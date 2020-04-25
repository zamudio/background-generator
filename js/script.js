let css = document.querySelector("h4");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let hex1 = document.getElementById("hex1");
let hex2 = document.getElementById("hex2");
let copy = document.querySelector("h3");

// hex value for color 1
hex1.textContent = color1.value;
// hex value for color 2
hex2.textContent = color2.value;

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  // hex value for color 1
  hex1.textContent = color1.value;
  // hex value for color 2
  hex2.textContent = color2.value;

  copy.textContent = "Copy the line below to use this background gradient: ";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
