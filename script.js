const gridDiv = document.querySelector(".grid-div");
let box = document.createElement("div");
box.classList.add("box-class");

let buildGrid = (boxNum) => {
  for (let i = 0; i < boxNum; i++) {
    gridDiv.appendChild(box.cloneNode(true));
  }
};

buildGrid(16);
