'use strict';

const num = 1000;

function countIteration(num) { 
  let totalIterations = 0;

  while (num >= 50) { 
    num /= 2;
    totalIterations++;
  }

  console.log(num);

  return totalIterations;
}

console.log(countIteration(num));