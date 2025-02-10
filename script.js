const cntr = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let crtDiv = document.createElement("div");
  crtDiv.style.width = "60px";
  crtDiv.style.height = "60px";
  crtDiv.style.color = "blue";
  crtDiv.style.backgroundColor = "grey";
  crtDiv.style.border = "1px solid #fff";
  crtDiv.textContent = +i;
  cntr.appendChild(crtDiv);
}
