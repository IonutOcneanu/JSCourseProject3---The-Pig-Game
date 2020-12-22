"use strict";

//In work

let diceRoll = document.querySelector(".roll-dice");

//On click, roll the dice
const rollDice = function () {
  const dice = Math.trunc(Math.random() * 5) + 1;
  return dice;
};

diceRoll.addEventListener("click", rollDice);

//TODO: Create a div for each dice face (with one span for each dot) and display it based on the roll
