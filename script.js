"use strict";

//INWORK

//Start page
const startBtn = document.querySelector(".start-button");
const startScreen = document.querySelector(".start-screen");
const playerNames = document.querySelectorAll(".field");
const displayedNames = document.querySelectorAll(".player");
const form = document.getElementById("form");

const startGame = function () {
  //TODO: startScreen.classList.add("start-hidden");
  console.log(playerNames[0].textContent, playerNames[1].textContent);
  //   displayedNames[0].textContent = playerNames[0].textContent;
  //   displayedNames[1].textContent = playerNames[1].textContent;
};

startBtn.addEventListener("click", startGame);

//////////

const rollBtn = document.querySelector(".roll-dice");
const showDiceFaces = document.querySelectorAll(".dice");
const showDice = document.querySelector(".dice-box");
const newGame = document.querySelector(".new-game");
const totalScore = document.querySelectorAll(".round-score");
const currentScores = document.querySelectorAll(".score");
const holdBtn = document.querySelector(".hold");

//Resets the dice on second and onward rollBtn clicks (hides faces if visible)
let isClick = 0;
const hideDice = function () {
  if (isClick !== 0) {
    for (let i = 1; i <= showDiceFaces.length; i++) {
      if (!showDiceFaces[i].classList.contains("hidden")) {
        showDiceFaces[i].classList.add("hidden");
        break;
      }
    }
  }
};

//It's called on each rollBtn click
let rolledNumber;
function rollDice() {
  rolledNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNumber);
  return rolledNumber;
}

//On click, display the corresponding face
const displayDice = function () {
  rollDice();
  showDice.classList.remove("dice-noshow");
  for (let i = 1; i <= showDiceFaces.length; i++) {
    if (rolledNumber === i) {
      showDiceFaces[i].classList.remove("hidden");
      addScore();
      isClick = 1;
      break;
    }
  }
};
rollBtn.addEventListener("click", hideDice); //only runs if isClick === 1;
rollBtn.addEventListener("click", displayDice);

//Current score & player turn update
const activePlayerOne = document.getElementById("one");
const activePlayerTwo = document.getElementById("two");

function addScore() {
  //Player 1
  if (activePlayerOne.style.opacity === "1" && rolledNumber !== 1) {
    currentScores[0].textContent =
      parseInt(currentScores[0].textContent, 10) + rolledNumber;
  } else if (activePlayerOne.style.opacity === "1" && rolledNumber === 1) {
    currentScores[0].textContent = 0;
    activePlayerOne.style.opacity = "0.4";
    activePlayerTwo.style.opacity = "1";
  }
  //Player 2
  else if (activePlayerTwo.style.opacity === "1" && rolledNumber !== 1) {
    currentScores[1].textContent =
      parseInt(currentScores[1].textContent, 10) + rolledNumber;
  } else if (activePlayerTwo.style.opacity === "1" && rolledNumber === 1) {
    currentScores[1].textContent = 0;
    activePlayerOne.style.opacity = "1";
    activePlayerTwo.style.opacity = "0.4";
  }
}

//Start a new game
const resetGame = function () {
  currentScores[0].textContent = "0";
  currentScores[1].textContent = "0";
  totalScore[0].textContent = "0";
  totalScore[1].textContent = "0";
  showDice.classList.add("dice-noshow");
  activePlayerOne.style.opacity = "1";
  activePlayerTwo.style.opacity = "0.4";
};

newGame.addEventListener("click", resetGame);

/*TODO: 
- HOLD button functionality
-Get name from input field;
-Check winner
*/
