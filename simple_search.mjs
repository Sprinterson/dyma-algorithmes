/* 
- Algorithme de complexité O(n)
*/

const tableau = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100000000);
let numberOfTries = 0;
console.log('number to guess: ', numberToGuess);

function simpleSearch(tableau, numberToGuess) {
  for (let i = 0; i < tableau.length; i++) {
    numberOfTries++;
    if (tableau[i] === numberToGuess) {
      return i + 1;
    }
  }
  return -1;
}

const result = simpleSearch(tableau, numberToGuess);
console.log('result:', result);
console.log('number of tries: ', numberOfTries);
