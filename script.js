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

    // Mouse hover effect
    createGrid.addEventListener("mouseover", (e) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = `#${randomColor}`;
    });
    // createGrid.addEventListener("mouseout", () => {
    //   createGrid.style.backgroundColor = "#cccccc";
    // });
    $container.appendChild(createGrid);
  }
}
gridContainer(16);

const btnSize = document.createElement("button");
btnSize.textContent = "Choice another size";
$container.appendChild(btnSize);
btnSize.style.height = "60px";
btnSize.style.borderRadius = "10px";
btnSize.style.padding = "5px";
btnSize.style.backgroundColor = "#09f";
btnSize.style.marginTop = "5px";

btnSize.addEventListener("click", () => {
  let amount = prompt("Amout of grid? ¡¡¡MAX 100!!!");
  if (isNaN(amount) || amount > 100 || amount < 1)
    return alert("Enter only number or maximum amount(100)");
  $container.replaceChildren();
  gridContainer(amount);
  $container.appendChild(btnSize);
});
