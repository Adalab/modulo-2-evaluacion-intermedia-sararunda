'use strict';
//variables
const playBtn = document.querySelector('.js-play');
const selectOption = document.querySelector('.js-select');
const howMuchMoney = document.querySelector('.js-money');
const winnerGame = document.querySelector('.js-winner');
const accumulatedMoney = document.querySelector('.js-money-back');
const resetBtn = document.querySelector('.js-reset');
let saldo = 50;
//función número azar
function getRandomNumber(min, max) {
  const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
  return randomResult;
}

function handleClick() {
  //valores en numeros
  const computerOptionNum = getRandomNumber(1, 6);
  let userOptionNum = parseInt(selectOption.value);
  let amountWagered = parseInt(howMuchMoney.value);
  if (userOptionNum === computerOptionNum) {
    winnerGame.innerHTML = `¡Has ganado el doble de lo apostado! <i class="fa-solid fa-face-laugh-beam"></i>`;
    saldo = saldo + amountWagered * 2;
    accumulatedMoney.innerHTML = `Saldo: ${saldo}`;
  } else {
    winnerGame.innerHTML = `¡Has perdido lo apostado! <i class="fa-solid fa-face-sad-cry"></i>`;
    saldo = saldo - amountWagered;
    accumulatedMoney.innerHTML = `Saldo: ${saldo} <i class="fa-solid fa-sack-dollar"></i>`;
  }
}

playBtn.addEventListener('click', handleClick);
//reset partida
function handleClickReset() {
  howMuchMoney = '';
}
resetBtn.addEventListener('click', handleClickReset);
