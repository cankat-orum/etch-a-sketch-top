const gridDiv = document.querySelector(".grid-div");
let box = document.createElement("div");
box.classList.add("box-class");

// let buildGrid = (boxNum) => {
//   for (let i = 0; i < boxNum; i++) {
//     box.classList.remove(`box-div-${i}`);
//     box.classList.add(`box-div-${i + 1}`);
//     gridDiv.appendChild(box.cloneNode(true)); // use cloneNode to append same item multiple times.
//   }
// };

function buildGrid(rows, cols) {
  box.addEventListener(
    "mouseover",
    function (e) {
      // let r = document.querySelector(":root");
      // let hslValue = getComputedStyle(r).getPropertyValue("--hsl-value");
      // console.log(hslValue);
      // r.style.setProperty("--hsl-value", hslValue - 50);
      console.log("HELLO WORLD");
    },
    false
  );
  gridDiv.style.setProperty("--grid-rows", rows);
  gridDiv.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    box.classList.remove(`box-div-${c}`);
    box.classList.add(`box-div-${c + 1}`);
    gridDiv.appendChild(box.cloneNode(true));
  }
}

buildGrid(16, 16);
