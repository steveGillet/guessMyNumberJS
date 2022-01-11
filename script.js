'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

resetGame();

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  console.log(input, typeof input);
  if (!input) {
    displayMessage('🤦‍♀️ No input...');
  } else if (input === secretNumber) {
    displayMessage('🎊 Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '7rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (input !== secretNumber) {
    if (score > 1) {
      displayMessage(input > secretNumber ? '👇 Too High!' : '☝ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
