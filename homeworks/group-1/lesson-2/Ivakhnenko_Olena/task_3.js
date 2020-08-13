var count = prompt('Enter any number', '');

var result = (+count === 2 || +count === 7) ? +count + 7 : +count / 2;

console.log(result);