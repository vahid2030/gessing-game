'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
    // when players win
  } else if (guess === secretNumber) {
    displayMessage('Corect Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // refactor when player guess is too high or too low
  } else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? 'Too high' : 'Too low';
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    if (score < 1) {
      displayMessage('You lost the game');
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // // when players guess to high
  // else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'Too high';
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   } else {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   // when players guess to low
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Too low';
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   } else {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
