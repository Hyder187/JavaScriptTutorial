'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let number = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;
let score = 20;

//handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when no number entered
  if (!guess) {
    displayMessage('No Number :(');
  } else if (guess === number) {
    displayMessage('Correct Number :)');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high >' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Coding Challenge # 1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
