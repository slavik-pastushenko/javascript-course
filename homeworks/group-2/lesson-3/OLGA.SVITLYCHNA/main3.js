// Создайте функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число. Знания которые понадобятся: Условные выражения, остаток от деления %, функции.

let number1 = 10;
let number2 = 2;

function checkNumber (first, second) {
    if ( firs % 2 === 0 && second % 2 === 0){
        return first * second;
    } else if (!(first % 2 === 0) && !(second % 2 === 0)) {
        return first - second
    } else if (!first % 2 === 0 && second % 2 === 0){
        return `нечётное число ${first}`;
    } else if (first % 2 === 0 && !second % 2 === 0){
        return `нечётное число ${second}`;
    }
}
console.log(checkNumber(number1, number2));