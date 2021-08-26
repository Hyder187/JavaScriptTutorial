'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside a constructor function
};

//static method
Person.hey = function () {
  console.log('Hey there');
};

Person.hey();

const jonas = new Person('Jonas', 1991);
const hyder = new Person('Hyder', 1998);
const shayaan = new Person('Shayaan', 1991);

console.log(jonas, hyder, shayaan);

//1. New empty object is created
//2. function is called , this={}
//3. {} linked to prototype
//4. function automatically return {}

//to know whether object is instance of a class or not
console.log(jonas instanceof Person);

//Prototypes
//calcAge function added to Person prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, hyder.species);

//object: reached the top of the prototype chain
console.log(jonas.__proto__.__proto__);

const arr = [1, 2, 3, 3, 4];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');

const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const mercedes = new Car(40, 'mercedes');
mercedes.accelerate();
mercedes.brake();

//ES6 classes
//class expression
const PersonClass = class {};

//class declaration

// classes are not hoisted
// class are first-class citizens
// classes are excuted in strict mode

//getter and setter properties
const account = {
  owner: 'joans',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 150;
console.log(account.latest);

//3rd way of oop in js
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.init('Steven', 1998);

console.log(steven);

//coding challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//Inheritance using constructor

const Human = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Human.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);

Student.prototype.constructor = Student;
console.log(mike.__proto__);

//coding challenge # 3
const ElectricCar = function (make, speed, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new ElectricCar('Tesla', 120, 23);
tesla.chargeBattery(50);
tesla.accelerate();
console.log(tesla);

//Inheritance using ES6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

class Employee extends PersonCl {
  constructor(fullName, birthYear, course) {
    //call super function first ALWAYS
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study`);
  }
}

const employee1 = new Employee('Hyder Naqvi', 2010, 'JS');
employee1.introduce();

//Inheritance using Object.create

const PersonPrototype = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const armaghan = Object.create(PersonPrototype);

const StudentPrototype = Object.create(PersonPrototype);
StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

const shaheer = Object.create(StudentPrototype);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-140);
    return this;
  }
}

const acc1 = new Account('Hyder', 'PKR', 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

//Encapsulation
class SecureAccount {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-140);
  }

  getMovements() {
    return this.movements;
  }

  _approveLoan(val) {
    return true;
  }
}

const acc2 = new SecureAccount('Hyder', 'PKR', 1111);

acc2.deposit(250);
acc2.withdraw(140);
acc2._approveLoan(33093);

console.log(acc2);

//private class fields and methods

//Public fields
//Private fields
//Public methods
//Private methods
//static version of all above methods available

class Acc {
  //Public fields (instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-140);
  }

  getMovements() {
    return this.#movements;
  }

  //private methods

  #approveLoan(val) {
    return true;
  }
}

const acc3 = new Acc('', '', '');
console.log(acc3.getMovements());

//chaining methods
acc1.deposit(300).deposit(500).withdraw(500);
