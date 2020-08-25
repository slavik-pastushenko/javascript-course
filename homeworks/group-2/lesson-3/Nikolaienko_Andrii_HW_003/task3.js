const num1 = +prompt();
const num2 = +prompt();

function numChecked (num1,num2) { 
    if (num1 % 2 === 0 && num2 % 2 === 0){
        return num1 * num2;
    } else if ((num1 % 2 !== 0) && (num2 % 2 !== 0)){ 
        return num1 - num2;
    } else if (num1 % 2 !== 0 && num2 % 2 === 0){ 
        return `нечётное число ${num1}`;
    } else if (num1 % 2 === 0 && num2 % 2 !== 0){
        return `нечётное число ${num2}`;
    }
}
console.log(numberChecker(num1, num2));

