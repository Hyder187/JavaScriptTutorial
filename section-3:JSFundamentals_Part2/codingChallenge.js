// functions coding challenge

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(scoreTeam1, scoreTeam2) {
  let winner;
  let winnerScore;
  let loserScore;
  if (scoreTeam1 >= scoreTeam2 * 2) {
    winner = "Dolphins";
    winnerScore = scoreTeam1;
    loserScore = scoreTeam2;
  } else if (scoreTeam2 >= scoreTeam1 * 2) {
    winner = "Koalas";
    winnerScore = scoreTeam2;
    loserScore = scoreTeam1;
  } else {
    return `No team wins`;
  }

  return `${winner} win (${winnerScore} vs. ${loserScore})`;
}

console.log("Dolphins", calcAverage(44, 23, 71));
console.log("Koalas", calcAverage(65, 54, 49));

console.log("Dolphins", calcAverage(85, 54, 41));
console.log("Koalas", calcAverage(23, 34, 27));

console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// Coding challenge no. 2

function calcTip(billValue) {
  const tip =
    billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
  return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const totalBills = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[bills.length - 1]) + bills[bills.length - 1],
];
console.log(totalBills);

//Coding challenge # 3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() >= mark.calcBMI()) {
  console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
} else {
  console.log(`Marks's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
}

//Coding challenge #4

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const totals = [];

function calcTip(billValue) {
  const tip =
    billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
  return tip;
}

for (let i = 0; i < bills4.length; i++) {
  tips4[i] = calcTip(bills4[i]);
  totals[i] = tips4[i] + bills4[i];
}

console.log(tips4);
console.log(totals);

function calculateAvg(arr) {
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }

  return avg / arr.length;
}

console.log(calculateAvg(tips));
