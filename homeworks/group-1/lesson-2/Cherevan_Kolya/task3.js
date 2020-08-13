
// solution with ternary operator

const count = +prompt();

let checkCount = ((count === 0) || (count === 2))
    ? count + 10
    : count / 10;
console.log(checkCount)