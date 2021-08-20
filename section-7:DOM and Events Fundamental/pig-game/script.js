'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  //conditions before the game starts

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--active');
};

init();
//functions

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling the dice

let diceNumber;

rollDiceButton.addEventListener('click', function () {
  if (playing) {
    //generating random dice number
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    //displaying it on the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    //dealing with scores and switching turns
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  if (playing) {
    //adding current scores to the overall scores here
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);

    //setting the scores of current player on the screen
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //checking if the score exceeds 100
    if (scores[activePlayer] >= 100) {
      //assign winner and end the game here

      playing = false;
      diceEl.classList.add('hidden');

      //adding the winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //removing the active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //now switching the player
      switchPlayer();
    }
  }
});

newButton.addEventListener('click', init);
