'use strict';

const arr = ['a', 'b', 'c', 'd'];

function arrayFormatter(arr) { 
  return `${arr[0] + arr[1]}, ${arr[2] + arr[3]}`;
}

console.log(arrayFormatter(arr));