"use strict";

//INWORK

/*TODO: 
- HOLD button functionality / check winner ---> reset score when dice rolls 1 and check who has the highest score if X holds (6 for 3 rounds) have been done
- Add a function for ^ + rolling 1 which is currently included in the addScore function
-Get name from input field;
*/

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
const totalScore = document.querySelectorAll(".round-score");
const currentScores = document.querySelectorAll(".score");
const activePlayerOne = document.getElementById("one");
const activePlayerTwo = document.getElementById("two");
const overlay = document.querySelector(".overlay");
const winBox = document.querySelector(".win-box");
const winMessage = document.querySelector(".win-message");
const activeOpacityValue = "1";
const waittingOpacityValue = "0.3";
let pOneTrack = 0;
let pTwoTrack = 0;
const lossScore = 3;

function addScore() {
  //Player 1
  if (
    activePlayerOne.style.opacity === activeOpacityValue &&
    rolledNumber !== 1
  ) {
    currentScores[0].textContent =
      parseInt(currentScores[0].textContent, 10) + rolledNumber;
  } else if (
    activePlayerOne.style.opacity === activeOpacityValue &&
    rolledNumber === 1
  ) {
    currentScores[0].textContent = 0;
    activePlayerOne.style.opacity = waittingOpacityValue;
    activePlayerTwo.style.opacity = activeOpacityValue;
    pOneTrack += 1;
  }
  //Player 2
  else if (
    activePlayerTwo.style.opacity === activeOpacityValue &&
    rolledNumber !== 1
  ) {
    currentScores[1].textContent =
      parseInt(currentScores[1].textContent, 10) + rolledNumber;
  } else if (
    activePlayerTwo.style.opacity === activeOpacityValue &&
    rolledNumber === 1
  ) {
    currentScores[1].textContent = 0;
    activePlayerOne.style.opacity = activeOpacityValue;
    activePlayerTwo.style.opacity = waittingOpacityValue;
    pTwoTrack += 1;
  }

  if (pOneTrack === lossScore) {
    winMessage.textContent = `Player Two Has Won!`;
    overlay.classList.remove("hidden");
    winBox.classList.remove("hidden");
  } else if (pTwoTrack === lossScore) {
    winMessage.textContent = `Player One Has Won!`;
    overlay.classList.remove("hidden");
    winBox.classList.remove("hidden");
  }
}

//Hold the current score and end the turn
const holdBtn = document.querySelector(".hold");

const holdScore = function () {
  if (activePlayerOne.style.opacity === activeOpacityValue) {
    totalScore[0].textContent =
      parseInt(totalScore[0].textContent, 10) +
      parseInt(currentScores[0].textContent, 10);
    currentScores[0].textContent = 0;
    activePlayerOne.style.opacity = waittingOpacityValue;
    activePlayerTwo.style.opacity = activeOpacityValue;
  } else if (activePlayerTwo.style.opacity === activeOpacityValue) {
    totalScore[1].textContent =
      parseInt(totalScore[1].textContent, 10) +
      parseInt(currentScores[1].textContent, 10);
    currentScores[1].textContent = 0;
    activePlayerOne.style.opacity = activeOpacityValue;
    activePlayerTwo.style.opacity = waittingOpacityValue;
  }
};

holdBtn.addEventListener("click", holdScore);

//Start a new game
const newGame = document.querySelector(".new-game");

const resetGame = function () {
  showDice.classList.add("dice-noshow");
  overlay.classList.add("hidden");
  winBox.classList.add("hidden");
  currentScores[0].textContent = "0";
  currentScores[1].textContent = "0";
  totalScore[0].textContent = "0";
  totalScore[1].textContent = "0";
  activePlayerOne.style.opacity = "1";
  activePlayerTwo.style.opacity = "0.4";
  pOneTrack = 0;
  pTwoTrack = 0;
};

newGame.addEventListener("click", resetGame);
