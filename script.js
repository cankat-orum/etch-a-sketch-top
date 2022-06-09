const gridDiv = document.querySelector(".grid-div");
let box = document.createElement("div");
box.classList.add("box-class");
// box.addEventListener("mouseenter", function () {
//   // let r = document.querySelector(":root");
//   // let hslValue = getComputedStyle(r).getPropertyValue("--hsl-value");
//   // console.log(hslValue);
//   // r.style.setProperty("--hsl-value", hslValue - 50);
//   console.log("HELLO WORLD");
// });

// function attachEventListener() {
//   const cells = document.querySelectorAll(".box-class");
//   cells.forEach((cell) => {
//     cell.addEventListener("mouseenter", function () {
//       let r = document.querySelector(":root");
//       let hslValue = getComputedStyle(r).getPropertyValue("--hsl-value");
//       console.log(hslValue);
//       r.style.setProperty("--hsl-value", hslValue - 10);
//     });
//   });
// }

function attachEventListener() {
  const cells = document.querySelectorAll(".box-class");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", function (e) {
      let r = document.querySelector(":root");
      let hslValue = getComputedStyle(r).getPropertyValue("--hsl-value");
      let cellClass = cell.classList[1];
      console.log(cellClass);
      let newHsl = hslValue - 50;
      cell.style.backgroundColor = `hsl(217, 0%, ${newHsl}%)`;
    });
  });
}

function buildGrid(rows, cols) {
  gridDiv.style.setProperty("--grid-rows", rows);
  gridDiv.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    box.classList.remove(`box-div-${c}`);
    box.classList.add(`box-div-${c + 1}`);
    gridDiv.appendChild(box.cloneNode(true)); // use cloneNode for appending element multiple times with a loop (doesn't copy event listeners of the element)
  }
  attachEventListener();
}

buildGrid(16, 16);
