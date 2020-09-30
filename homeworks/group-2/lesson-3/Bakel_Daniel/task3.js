'use string';

function calc(num1, num2) { 
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 + num2;
  } else { 
    if (num1 % 2 !== 0) { 
      return num1;
    }

    return num2;
  }
}

console.log(calc(10, 6));
console.log(calc(1, 17));
console.log(calc(1, 10));
console.log(calc(10, 33));