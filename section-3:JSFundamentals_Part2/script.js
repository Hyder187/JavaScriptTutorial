"use strict";

// strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';

//functions

function logger() {
  console.log("My name is Jonas");
}

//calling,running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const string = fruitProcessor(5, 0);
console.log(string);

//TYPES OF FUNCTIONS

//function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

console.log(calcAge1(1991));

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

//Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

const yearsUnltilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUnltilRetirement(1991, "Hyder"));

//functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(4, 4));

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsTillRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsTillRetirement(1991, "Hyder"));

//ARRAYS

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[2]);

//length
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Shayaan";
console.log(friends);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const testYears = [1990, 1967, 2002, 2010, 2018];

console.log("age1", calcAge(testYears[0]));

//Array Methods

const jonasFriends = ["Michael", "Steven", "Peter"];
jonasFriends.push("Jay");

console.log(jonasFriends);

//OBJECTS

const hyder = {
  firstName: "Hyder",
  lastname: "Naqvi",
  age: 23,
  city: "Islamabad",
  friends: ["Shayaan", "Bilal", "Huzi"],
};

console.log(hyder);

console.log(hyder.lastname);
console.log(hyder["lastname"]);

const nameKey = "Name";

console.log(hyder["first" + nameKey]);

const interestedIn = "city";

if (hyder[interestedIn]) {
  console.log(hyder[interestedIn]);
}

hyder.location = "Islamabad";

console.log(hyder);

console.log(
  `${hyder.firstName} has ${hyder.friends.length} friends, and his best friend is called ${hyder.friends[1]}`
);

// object methods

const hyder1 = {
  firstName: "Hyder",
  lastname: "Naqvi",
  birthYear: 1998,
  city: "Islamabad",
  friends: ["Shayaan", "Bilal", "Huzi"],
  hasDriverLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge1: function () {
    return 2037 - this.birthYear;
  },

  calcAge2: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge1()}`;
  },
};

//2 ways of calling object functions

console.log(hyder1.calcAge(1998));
console.log(hyder1["calcAge"](1991));
console.log(hyder1.calcAge1());
console.log(hyder1.getSummary());

//LOOPS

//for loop
for (let i = 0; i < 10; i++) {
  console.log(`Iteration no. ${i}`);
}

const hyderArray = [
  "hyder",
  "naqvi",
  23,
  "software engineer",
  ["Bilal", "Shayaan", "Furrukh"],
];

const types = [];

for (let i = 0; i < hyderArray.length; i++) {
  console.log(hyderArray[i], typeof hyderArray[i]);

  types[i] = typeof hyderArray[i];
}

console.log(types);

const loopYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < loopYears.length; i++) {
  console.log(loopYears[i]);
}

console.log(ages);

for (let i = years.length - 1; i >= 0; i--) {
  console.log(years[i]);
}

//loop nesting

for (let i = 1; i <= 3; i++) {
  console.log(`Starting exercise no. ${i}`);
  for (let j = 1; j <= 12; j++) {
    console.log(`${j}th rep of ${i}th exercise`);
  }
}

//while loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
