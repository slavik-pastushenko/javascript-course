'use strict';

const numbers = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < numbers.length; i++) { 
  if (numbers[i] === 4) { 
    console.log('Есть');
    break;
  }
}