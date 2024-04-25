const tableEl = document.getElementById("innerTable");
const randNumBTN = document.getElementById("randNum");
const numDisplay = document.getElementById("numDisplay");

let extractedNumbers = [];

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = i;
  tableEl.appendChild(cell);
}

function randNumExtractor() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (extractedNumbers.includes(randomNumber));
  extractedNumbers.push(randomNumber);
  return randomNumber;
}

randNumBTN.addEventListener("click", function () {
  const randomNumber = randNumExtractor();
  numDisplay.innerText = randomNumber;
  const selectedCell = document.querySelector(".cell:nth-child(" + randomNumber + ")");
  selectedCell.style.backgroundColor = "#ffb703";
  selectedCell.style.color = "white";
});
