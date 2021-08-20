//OPERATORS

const ageJonas = 2037 - 1991;
console.log(ageJonas);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonasDetail =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonasDetail);

//template literals

const jonasDetailNew = `I'm ${firstName}, a ${
  year - birthYear
} year old ${job}`;
console.log(jonasDetailNew);

//multi-line strings
console.log(`String
Hyder
Shayaan`);

const hydersAge = 14;
const isOldEnough = hydersAge >= 18;

if (hydersAge >= 18) {
  console.log("Hyder can start driving");
} else {
  console.log(`Hyder can start driving in ${18 - hydersAge} years`);
}

//Type conversion

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

//type coercion

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);

// Truthy and falsy values
// 5 falsy values 0, '',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 4;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Go get a job");
}

let height;
if (height) {
  console.log("Yay height is defined");
} else {
  console.log("Height is Undefined");
}

const age1 = 18;
if (age1 === 18) console.log("you just became an adult");

const favourite = prompt("What's your favourite number");
if (favourite === 23) {
  console.log("23 is a great number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Neither 7 nor 23");
}

// boolean arithmetic

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

//The switch statement

const day = "e";

switch (day) {
  case "monday":
    console.log(`Today is ${day}`);
    break;
  case "tuesday":
    console.log(`Today is ${day}`);
    break;

  case "wednesday":
  case "thursday":
    console.log("TW");
    break;
  default:
    console.log("Neither of the days");
}

//conditional ternary operator

const age = 23;

age >= 18
  ? console.log("I like to drink cold drinks")
  : console.log("I like to drink milk");

const bill = 275;
tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
