'use strict';

//default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES5 old way
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('Lh123', undefined, 500);

const flight = 'LH123';
const jonas = {
  name: 'Hyder Abbas Naqvi',
  passport: 24768899890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24768899890) {
    console.log('Checked In');
  } else {
    console.log('Wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//object gets changed after the function is executed

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//first class and higher order functions

//an higher order function receives function ina n argument, returns a new function or can do both

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function as it takes function as an argument
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('java is the best language ever', oneWord);

//lower level of abstraction
const high5 = function () {
  console.log('%');
};

//higher level of abstraction
document.body.addEventListener('click', high5);

['Jonas', 'Hyder', 'Shayaan'].forEach(high5);

//callback functions help in adding abstraction to the code

//functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Hyder');
greeterHey('Shayaan');

//can also be done like this
greet('Hello')('Bilal');

//Arrow functions

const greetArrow = (greeting1, greeting2) => name =>
  console.log(`${greeting1} ${greeting2} ${name}`);
greetArrow('Hi', 'Hello')('Furrukh');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'Lh',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Hyder');

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DOES not work
// book(23,'Hyder');

//manually set this keyword of a function as the first argument
book.call(eurowings, 23, 'Shayaan');
book.call(lufthansa, 239, 'Hyder');

//APPLY METHOD: the difference it takes array of arguments
const flightData = [583, 'Hyder Naqvi'];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);

//the bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Hyder Abbas');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.2, 22000));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(20000));

const func = rate => value => {
  return value + rate * value;
};

console.log(func(0.1)(10000));

//coding challenge
const poll = {
  question: 'what is your favourite programming language',
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const choiceSelected = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    typeof choiceSelected === 'number' &&
      choiceSelected < this.answers.length &&
      this.answers[choiceSelected]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const answerPollButton = document.querySelector('.poll');

answerPollButton.addEventListener('click', poll.registerNewAnswer.bind(poll));

console.log(poll);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//Immidiately invoked function expressions
(function () {
  console.log('This will actually never run again');
})();

(() => console.log('This will also never run again'))();

//closures

const secureBooking = function () {
  let passengercount = 0;
  return function () {
    passengercount++;
    console.log(`${passengercount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assigned by h
h();
f();
console.dir(f);

//Example 2 Closures
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //despite being called after 3 seconds it had access to all variables
  setTimeout(function () {
    console.log(`We are now boarding all the ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers `);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

//Coding challenge # 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
