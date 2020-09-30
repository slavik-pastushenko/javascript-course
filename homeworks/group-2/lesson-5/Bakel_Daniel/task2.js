'use strict';

const arr = [4, 2, 5, 19, 13, 0, 10];

let total = 0;

for (let i = 0; i < arr.length; i++) { 
  total += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(total));