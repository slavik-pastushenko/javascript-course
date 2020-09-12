'use strict';

const carsNum = [1, 2, 3, 4, 5];

const carsCounter = carsNum.map(num => {
  if (num === 1) {
    return num + ' машина';
  } else if (num === 5) {
    return num + ' машин';
  } 

  return num + ' машины';
});
 
console.log(carsCounter);