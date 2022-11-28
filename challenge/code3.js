const max = document.querySelector("#max");
const maxInput = document.querySelector("#max input");
const guess = document.querySelector("#guess");
const guessInput = document.querySelector("#guess input");
const choose = document.querySelector("#choose span");
const result = document.querySelector("#result");
let maxNumber;

function onMaxNumber() {
  maxNumber = maxInput.value;
}

function onGuessNumber(e) {
  e.preventDefault();
  if (maxNumber === "") alert("Please write max number !");
  else {
    const guessNumber = guessInput.value;
    const randomNumber = Math.round(Math.random() * maxNumber);
    choose.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;
    if (parseInt(guessNumber, 10) === randomNumber) {
      result.querySelector("span").innerText = "You won!";
    } else {
      result.querySelector("span").innerText = "You lost!";
    }
  }
}

max.addEventListener("keyup", onMaxNumber);
guess.addEventListener("submit", onGuessNumber);
