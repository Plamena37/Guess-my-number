'use strict';

// ***********************************************
const messageLabel = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const body = document.querySelector('body');
const hiddenNum = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
// ***********************************************

let score = 20;
let highscore = 0;
// Declaring a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  messageLabel.textContent = message;
};

// ***********************************************
// CHECK BUTTON
// ***********************************************
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (guess == ' ') {
    displayMessage('⛔ No number!');
  }

  // If number is out of range
  else if (guess < 1 || guess > 20) {
    displayMessage('⛔ Invalid number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    hiddenNum.textContent = secretNumber;

    body.style.backgroundImage =
      'linear-gradient(to right top, #008d79, #019575, #179d6e, #2da464, #43ab59, #43ab59, #43ab59, #43ab59, #2da464, #179d6e, #019575, #008d79)';

    hiddenNum.style.width = '30rem';

    // Implementing Highscore
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreLabel.textContent = 0;
    }
  }
});

// ***********************************************
// AGAIN BUTTON
// ***********************************************
document.querySelector('.again').addEventListener('click', function () {
  body.style.backgroundImage =
    'linear-gradient(to right top,#000000, #0d0d0d,#161616,#1d1d1d,#252525,#2c2c2c,#333333,#3b3b3b,#434343,#4c4c4c,#555555,#5e5e5e)';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  scoreLabel.textContent = score;
  hiddenNum.textContent = '?';
  guessInput.value = '';
  hiddenNum.style.width = '15rem';
});
