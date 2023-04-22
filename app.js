const p1Btn = document.querySelector("#p1-button");
const p2Btn = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetBtn = document.querySelector("#reset");
const maxWin = document.querySelector("#winpoint");
const winnerMessage = document.querySelector("#winner-message");
const noteContainer = document.querySelector(".note-container");
const closeBtns = document.querySelectorAll(".close-btn");

let p1Score = 0;
let p2Score = 0;
let winPoint = 50;
let isGameOvah = false;

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const note = btn.parentElement;
    note.style.display = "none";
  });
});

const hideNote = () => {
  const note = document.querySelector(".note");
  note.classList.add("hide");
};

setTimeout(hideNote, 4000);

const reset = () => {
  isGameOvah = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  winnerMessage.textContent = "";
};

const checkWinner = () => {
  if (p1Score === winPoint) {
    winnerMessage.textContent = "Congrats Player 1 Win!";
    winnerMessage.classList.add("ijoButsrep");
    isGameOvah = true;
  } else if (p2Score === winPoint) {
    winnerMessage.textContent = "Congrats Player 2 Win!";
    winnerMessage.classList.add("ijoButsrep");
    isGameOvah = true;
  }
};

p1Btn.addEventListener("click", handleP1ButtonClick);
p2Btn.addEventListener("click", handleP2ButtonClick);
resetBtn.addEventListener("click", reset);
maxWin.addEventListener("change", () => {
  winPoint = parseInt(maxWin.value);
  reset();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA" || e.code === "KeyS") {
    handleP1ButtonClick();
  } else if (e.code === "KeyL" || e.code === "KeyK") {
    handleP2ButtonClick();
  }
});

function handleP1ButtonClick() {
  if (!isGameOvah) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    checkWinner();
  }
}

function handleP2ButtonClick() {
  if (!isGameOvah) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    checkWinner();
  }
}
