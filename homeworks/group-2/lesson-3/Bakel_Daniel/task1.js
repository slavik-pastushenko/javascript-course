'use strict';

function convertNumberIntoString(num) { 
  if (typeof num === 'number') { 
    return num + '';
  }

  return 'Wrong data type!!!';
}

console.log(convertNumberIntoString(55));
console.log(convertNumberIntoString('55'));