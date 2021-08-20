'use strict';

//SCOPING
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstname} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millineal = 'Testing var variable';
      const str = `Oh and youre a millineal, ${firstname}`;
      console.log(str);

      //changing value of output
      output = 'Changed value';

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millineal);
    console.log(output);
  }

  printAge();

  return age;
}

const firstname = 'Hyder';
calcAge(1991);

//HOISTING TDZ IN PRACTICE

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'hyder';
let job = 'teacher';
const year = 1991;

//FUNCTIONS

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//EXAMPLE

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

//var,let const

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//THIS KEYWORD

console.log(this); //window

const thisFunction = function () {
  console.log(this); //undefined
};

thisFunction();

const thisFunctionArrow = () => {
  console.log(this); //window
};

thisFunctionArrow();

const hyder = {
  firstname: 'Hyder',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstname}`);
  },
};

hyder.calcAge();
hyder.greet(); // Hey undefined

const matilda = {
  year: 2017,
};

matilda.calcAge = hyder.calcAge;
matilda.calcAge();

//Arguments keyword

const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr1(2, 3, 9, 8);

var addArrow1 = (a, b) => {
  return a + b;
};

addArrow1(2, 5, 8);

//Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me1 = {
  name: 'Jonas',
  age: 30,
};

const friend = me1;
friend.age = 27;

console.log('Friends: ', friend);
console.log('Me: ', me1);

//Primitive types
let lastNameWill = 'Williams';
let oldLastNameWill = lastNameWill;
lastNameWill = 'Davis';
console.log(lastNameWill, oldLastNameWill);

//Reference types
const shayaan = {
  firstname: 'Shayaan',
  lastName: 'Farooq',
  age: 27,
};

const shayaanClone = shayaan;
shayaanClone.age = 22;
console.log(shayaan);
console.log(shayaanClone);

// Copying objects
const shayaan2 = {
  firstname: 'Shayaan',
  lastName: 'Farooq',
  age: 27,
  family: ['Alice', 'Bob'],
};

const shayaanCopy = Object.assign({}, shayaan2);
shayaanCopy.family.push('Bilal');

console.log(shayaanCopy);
console.log(shayaan2);
