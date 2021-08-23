'use strict';

const weekdays1 = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //enhanced object literals
  openingHours,

  //enhanced object literals
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

//swapping values
[first, second] = [second, first];
console.log(first, second);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [[1, 2, 3], 4, 5, 6];
const [one, two] = nested;
const [[i, j], k] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//destructuring objects

const { name, openingHours1, categories } = restaurant;

const { name: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };

({ a1, b1 } = obj);

console.log(a1, b1);

//Nested objects

const {
  fri: { open: o1, close: c1 },
} = openingHours;

console.log(o1, c1);

//destructuring objects in functions argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'House no. 187',
  mainIndex: 2,
  starterIndex: 2,
});

//Spread operator

//initial approach
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

// much simplified approach with spread operator
const newGoodArr = [1, 2, ...arr1];
console.log(newGoodArr);
console.log(...newGoodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menuCombined = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCombined);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Hyder';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = ['Mushroom', 'Cheese', 'Sausages'];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Hyder' };
console.log(newRestaurant);

//Rest Pattern (pack elements into an array)

//spread as ... on right side of equal
const arr3 = [1, 2, ...[3, 4]];

//rest as on left side of =
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

//... on both sides
const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3);
add(3, 4, 2, 3);
add(2, 3);

//or operator uses any data type, returns any data type

console.log('------------OR--------------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

//first non-falsy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------AND--------------');
console.log(0 && 'JONAS');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPasta) {
  restaurant.orderPasta('mushroom', 'cheese');
}

restaurant.orderPasta && restaurant.orderPasta('mushroom');

//Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;

//works on the principle of nullish values only null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: x1, team2 },
} = game;

console.log(team1, x1, team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players.length} goals were scored`);
  }
};

team1 < team2 && console.log('Team 1 is more likely to win');

//the for-of loop
const menu4 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu4) console.log(item);

for (const [i, el] of menu4.entries()) {
  console.log(i, el);
}

//optional chaining
console.log(restaurant.openingHours?.mon?.open);

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
}

console.log(openStr);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}

//Coding challenge # 2

//1
console.log('Part 1');
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
console.log('Part 2');
let avg = 0;
for (const [key, value] of Object.entries(game.odds)) {
  avg += value;
}

console.log(avg / Object.entries(game.odds).length);

//3
console.log('Part 3');

for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[key] || 'draw'} ${value}`);
}

//sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);

//no duplicates in sets
console.log(orderSet);

//size of set
console.log(orderSet.size);

//check if set cointains an item
console.log(orderSet.has('Pizza'));

//adding an item to the set
orderSet.add('Garlic Bread');
console.log(orderSet);

//delete an element form a set
orderSet.delete('Rissotto');
console.log(orderSet);

//delete all elements in a set
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set('HyderAbbasNaqvi').size);

//MAPS
const rest = new Map();
rest.set('name', 'Classic Itialliano');
rest.set(1, 'Hyder');

rest.set('1', 'Hyder').set('2', 'Shayaan');
rest.delete('1');
console.log(rest);

//Iteration in maps
const question = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Js'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;

if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

//convert map to array
console.log(...question);

//Coding challenge # 3

//data
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1

console.log(gameEvents.values());
const events = new Set(gameEvents.values());
const eventsArray = [...events];
console.log(eventsArray);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()];
console.log(time[time.length - 1]);

//4

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] : ${value}`);
}

//Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

//length
console.log(plane.length);

//returns first index
console.log(airline.indexOf('r'));

//returns last index
console.log(airline.lastIndexOf('r'));

//can find index for entire strings
console.log(airline.indexOf('Air'));

//slicing a string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats

  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');

//changing the case of the string

console.log(airline.toLowerCase());

//fix capitalization in passenger name

const passenger = 'hYdeR';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//check email
const email = 'hyderfast187@gmail.com';
const loginEmail = '  Hyder187@gmail.com\n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//can also do

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//replacing
const priceGB = '288,97';
const priceUS = priceGB.replace(',', '.');

console.log(priceUS);

const announcement =
  'All passengers come to the boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//Regular expression
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const planeNew = 'A320neo';
console.log(planeNew.includes('A320'));
console.log(planeNew.startsWith('A3'));
console.log(planeNew.endsWith('neo'));

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to carry these items to the plane');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//split
console.log('a+very+good+boy'.split('+'));
console.log('Hyder Naqvi'.split(' '));

const [firstName, lastName] = 'Hyder Naqvi'.split(' ');
console.log(firstName, lastName);

//join method
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let capitalizedName = '';
  for (let x of names) {
    capitalizedName += x[0].toUpperCase() + x.slice(1) + ' ';
  }

  return capitalizedName;
};

console.log(capitalizeName('hyder naqvi'));

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4333333386789));

//Repeat
const message2 = 'Bad Weather... All departures Delayed.... ';
console.log(message2.repeat(5));

//Coding challenge #4
const string =
  'underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure';
const arrayVariables = string.split('\n');
for (let [j, variable] of arrayVariables.entries()) {
  const camelCaseVariablesArray = variable.toLowerCase().trim().split('_');
  let tempArray = [];
  tempArray.push(camelCaseVariablesArray[0]);

  for (let i = 1; i < camelCaseVariablesArray.length; i++) {
    tempArray.push(
      camelCaseVariablesArray[i].replace(
        camelCaseVariablesArray[i][0],
        camelCaseVariablesArray[i][0].toUpperCase()
      )
    );
  }

  let camelCaseVariable = tempArray.join('');

  console.log(`${camelCaseVariable.padEnd(20, ' ')}${'#'.repeat(j + 1)}`);
}
