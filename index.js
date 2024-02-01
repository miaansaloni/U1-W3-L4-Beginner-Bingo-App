const tableEl = document.getElementById("innerTable");
const randNumBTN = document.getElementById("randNum");

for (let i = 1; i <= 76; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = i;
  tableEl.appendChild(cell);
}

function randNumExtractor() {
  return Math.floor(Math.random() * 76) + 1;
}

randNumBTN.addEventListener("click", function () {
  const randomNumber = randNumExtractor();
  const selectedCell = document.querySelector(".cell:nth-child(" + randomNumber + ")");
  selectedCell.style.backgroundColor = "#ffb703";
  selectedCell.style.color = "white";
});
