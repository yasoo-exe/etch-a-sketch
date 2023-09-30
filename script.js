let button = document.querySelector(".controls button[type='button']");
let container = document.querySelector(".container");

function defaultGrid() {
  for (let i = 0; i < Math.pow(16, 2); i++) {
    container.appendChild(document.createElement("div"));
  }
  innerDivs(16);
}
function makeGrid() {
  container.innerText = "";
  let gridSize = document.querySelector(".controls input[type='number']").value;
  if (gridSize < 101 && gridSize > 0) {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
      container.appendChild(document.createElement("div"));
    }
    innerDivs(gridSize);
  } else {
    alert("Please enter a number between 1-100!");
    defaultGrid();
  }
}

function innerDivs(arg) {
  let divs = document.querySelectorAll(".container div");
  Array.from(divs).map((x) => {
    x.style.height = `${500 / arg}px`;
    x.style.width = `${500 / arg}px`;
    x.addEventListener("mouseover", randomizeColor, { once: true });
  });
}

function randomizeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

document.addEventListener("DOMContentLoaded", defaultGrid);
button.addEventListener("click", makeGrid);
