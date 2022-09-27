const tableau = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
let numberOfTries = 0;
console.log('number to guess: ', numberToGuess);

function binarySearch(tableau, numberToGuess) {
  let min = 0;
  let max = tableau.length - 1;

  while(min <= max) {
    numberOfTries++;
    let mid = Math.floor((min + max) / 2);
  }
}

const result = binarySearch(tableau, numberToGuess);
console.log('result:', result);
console.log('number of tries: ', numberOfTries);
