//Coding challenge

function printForecast(arr) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `... ${arr[i]}°C in ${i + 1} days ... `;
  }
  return s;
}

console.log(printForecast([17, 21, 23]));
