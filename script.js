let button = document.querySelector(".controls input[type='button']");
let container = document.querySelector(".container");

function defaultGrid() {
  for (let i = 0; i < Math.pow(16, 2); i++) {
    container.appendChild(document.createElement("div"));
  }
}
function makeGrid() {
  container.innerText = "";
  let gridSize = document.querySelector(".controls input[type='number']").value;
  if (gridSize < 101 && gridSize > 0) {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
      container.appendChild(document.createElement("div"));
    }
  } else {
    alert("Please enter a number between 1-100!");
    defaultGrid();
  }
}

document.addEventListener("DOMContentLoaded", defaultGrid);
button.addEventListener("click", makeGrid);
