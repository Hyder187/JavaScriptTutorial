'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcPrintBalance = movements => {
  const balance = movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE method: does not mutate the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

console.log(arr.slice());
console.log([...arr]);

//SPLICE method: mutates the original array
arr.splice(2);
console.log(arr);

//REVERSE: mutates the array
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());

//CONCAT:
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join('-'));

//LOOPING ARRAYS: forEach

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-------For Each---------');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

//forEach for maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//forEach for sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//Coding challenge 1

const juliaData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];

const dogAge = (jData, kData) => {
  const juliaCorrectData = [...jData];
  juliaCorrectData.splice(-2);
  juliaCorrectData.splice(0, 1);

  const combinedData = juliaCorrectData.concat(kData);
  console.log(combinedData);

  combinedData.forEach(function (value, i, array) {
    const str =
      value >= 3
        ? `Dog number ${i + 1} is an adult, and is ${value} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(str);
  });
};

dogAge(juliaData, katesData);

//Map, filter and reduce

//MAP: return new array after performing a certain operation on original array
const euroToUsd = 1.1;

const movementsUsd = movements.map(mov => mov * 1.1);

console.log(movementsUsd);

const movementStrings = movements.map((mov, i, array) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementStrings);

const user = 'Hyder Abbas Naqvi';

const createUserNames = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(account2);

//Filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

console.log(movements);

const balance = movements.reduce((acc, curr) => acc + curr, 0);

console.log(balance);

//maximum value

const max = movements.reduce(
  (acc, mov) => (mov > acc ? mov : acc),
  movements[0]
);
console.log(max);

const dogToHumanAge = dogAges => {
  const humanDogages = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanDogages);
  const adultDogs = humanDogages.filter(age => age >= 18);
  console.log(adultDogs);
  const average = adultDogs.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  console.log(average);
};

dogToHumanAge([5, 2, 4, 1, 15, 8, 3]);
