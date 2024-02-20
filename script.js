'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let availableTries = 20;
let lowestTriesHighscore = 0;

console.log('Secret Number: ' + secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);
  console.log('User Guess (Typecasted) Number: ' + userGuess);

  // No input

  if (!userGuess) {
    displayMessage('⛔ No number was given!');

    // When player wins
  }
  if (userGuess === secretNumber) {
    displayMessage('🐱‍🏍 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (availableTries > lowestTriesHighscore) {
      lowestTriesHighscore = availableTries;
      document.querySelector('.highscore').textContent = lowestTriesHighscore;
    }
    // When player is wrong
  } else {
    const message = userGuess > secretNumber ? '📈 Too High!' : '📉 Too Low';
    displayMessage(message);
    
    if (availableTries > 1) {
      availableTries--;
      document.querySelector('.score').textContent = availableTries;
    } else {
      displayMessage('😭 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  availableTries = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = availableTries;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
