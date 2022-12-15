//  1.	Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova.

/* 1. način

const array = [0, 18, 32, 48, 5, 6, 7, 10, 4, 0, 12];
let sum = 0; 

for (let i = 0; i<=array.length; i++) {
    if (array[i] % 2 === 0) {
        sum +=array[i];
    }
}

console.log("suma niza je: ", sum);*/

// 2. način

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 === 0) {
            sum +=array[i];
      }
    }
    
    return sum;
  }

  const array = [0, 18, 32, 48, 5, 6, 7, 10, 4, 0, 12];

  console.log("suma niza je:", sum(array));