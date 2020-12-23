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
const currentScore = document.querySelectorAll(".score");
const holdBtn = document.querySelector(".hold");

//It's called on each roll button click
let rolledNumber;

function rollDice() {
  rolledNumber = Math.trunc(Math.random() * 6) + 1;
  return rolledNumber;
}

//On click, display the corresponding face
const displayDice = function () {
  rollDice();
  showDice.classList.remove("dice-noshow");
  console.log(rolledNumber);
  for (let i = 1; i <= showDiceFaces.length; i++) {
    if (rolledNumber === i) {
      console.log(showDiceFaces[i]);
      showDiceFaces[i].classList.remove("hidden");
    }
  }
  return rolledNumber;
};

rollBtn.addEventListener("click", displayDice);

//Start a new game

const resetGame = function () {
  currentScore.textContent = "0";
  totalScore.textContent = "0";
  showDice.classList.add("dice-noshow");
};

newGame.addEventListener("click", resetGame);

/*TODO: 
-Change currentScore based on which player is playing;
-If current player rolls 1, reset totalScore and changePlayer;
-Hide previous dice face;
-Get name from input field;
-Check winner
*/
