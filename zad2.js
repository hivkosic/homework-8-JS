/*   2.	Pronađi najmanji i najveći član niza i zbroji te brojeve, 
pa ako je zbroj manji od 10,  ispiši "Zbroj je jednoznamenkast", 
a ako je veći od 10, ispiši taj broj */

/*  1. način

var array = [1, 8, 0, 0, 0, 0];
var min = array[0];
var max = array[0];
var sum = 0;

for (var i = 1; i <= array.length; i++) {
  if (array[i] > max) {
      max = array[i];
  } 
  else if (array[i] < min) {
    min = array[i];
  }
}

console.log("najveći član:", max);
console.log("najmanji član:", min);
sum = min + max;

if (sum < 10) {
  console.log("zbroj je jednoznamenkast");
} else console.log("suma je:", sum); */



// 2. način

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr [i];
    }
  }
  
  return max;
}

function min(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr [i];
    }
  }
  
  return min;
}

const arr = [2, 14, 12, 5, 67, 40];
const maxNumber = max(arr);
const minNumber = min(arr);
const sum = minNumber + maxNumber;

console.log("najveći broj:", maxNumber);
console.log("najmanji broj", minNumber);

const ternary = sum < 10 ? "zbroj je jednoznamenkast" : `zbroj je ${sum}`;
console.log(ternary);



