"use strict";
//variables
const playBtn = document.querySelector(".js-play");
const selectOption = document.querySelector(".js-select");
const howMuchMoney = document.querySelector(".js-money");
const winnerGame = document.querySelector(".js-winner");
const accumulatedMoney = document.querySelector(".js-money-back");
let saldo = 50;
//función número azar
function getRandomNumber(min, max) {
  const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
  return randomResult;
}

function handleClick() {
  //valores en numeros
  const computerOptionNum = getRandomNumber(1, 6);
  const userOptionNum = parseInt(selectOption.value);
  const amountWagered = parseInt(howMuchMoney.value);
  console.log(accumulatedMoney.innerHTML);
  if (userOptionNum === computerOptionNum) {
    winnerGame.innerHTML = `¡Has ganado el doble de lo apostado! <i class="fa-solid fa-face-laugh-beam"></i>`;
    const saldoSum = saldo + amountWagered * 2;
    accumulatedMoney.innerHTML = `Saldo: ${saldoSum}`;
  } else {
    winnerGame.innerHTML = `¡Has perdido lo apostado! <i class="fa-solid fa-face-sad-cry"></i>`;
    const saldoRest = saldo - amountWagered;
    accumulatedMoney.innerHTML = `Saldo: ${saldoRest} <i class="fa-solid fa-sack-dollar"></i>`;
  }
}

playBtn.addEventListener("click", handleClick);
