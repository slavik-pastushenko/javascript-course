'use strict';

function getSum(num) { 
  let total = 0;
  let str = '';

  for (let i = 0; i <= num; i++) { 
    str += i + '+';
    total += i;
  }

  str = str.slice(0, str.lastIndexOf('+'));

  if (num > 0) {
    return `${str} = ${total}`;
  } else if (num < 0) { 
    return `${num} < 0`;
  }

  return 0;
}


console.log(getSum(6));
console.log(getSum(-15));
console.log(getSum(0));