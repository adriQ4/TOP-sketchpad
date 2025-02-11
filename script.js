const $container = document.querySelector(".container");

let gridSize = 16;

function gridContainer(size) {
  const totalGrids = size * size;
  const containerSize = 960 / size;
  for (let i = 0; i < totalGrids; i++) {
    let createGrid = document.createElement("div");

    createGrid.style.backgroundColor = "#cccccc";
    createGrid.style.border = "1px solid #fff";
    createGrid.style.width = `${containerSize}px`;
    createGrid.style.height = `${containerSize}px`;

    createGrid.addEventListener("mouseover", (e) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = `#${randomColor}`;
    });
    createGrid.addEventListener("mouseout", () => {
      createGrid.style.backgroundColor = "#cccccc";
    });
    $container.appendChild(createGrid);
  }
}
gridContainer(16);
