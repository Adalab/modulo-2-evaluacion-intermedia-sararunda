"use strict";
//variables
const playBtn = document.querySelector(".js-play");
const selectOption = document.querySelector(".js-select");
const howMuchMoney = document.querySelector(".js-money");
const winnerGame = document.querySelector(".js-winner");
const accumulatedMoney = document.querySelector(".js-money-back");
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
//función número azar
function getRandomNumber(min, max) {
  const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
  return randomResult;
}

function handleClick() {
  //valores en numeros
  const computerOptionNum = getRandomNumber(1, 6);
  const userOptionNum = parseInt(selectOption.value);
  const selectOptionNum = parseInt(howMuchMoney.value);
  if (userOptionNum === computerOptionNum) {
    winnerGame.innerHTML = "¡Has acertado! :)";
    accumulatedMoney.innerHTML += selectOptionNum * 2;
  } else {
    winnerGame.innerHTML = "¡Has perdido! :(";
  }
}

playBtn.addEventListener("click", handleClick);
