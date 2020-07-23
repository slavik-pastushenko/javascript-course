// Создайте функцию, получающую на вход два числа.
//     Если оба числа чётные - функция возвращает их произведение.
//     Если оба числа нечётные - функция возвращает их сумму.
//     Если одно из чисел чётное, а второе нечётное -
//     функция возвращает это нечётное число.
//     Знания которые понадобятся: Условные выражения, остаток от деления %, функции.
function isEven(number) {
    if (typeof number !== "number") {
        number = Number(number);
    }
    return number % 2 === 0;
}

function mathIteration(first, second) {
    if (isEven(first) && isEven(second)) {
        return first * second;
    }
    if (!isEven(first) && !isEven(second)) {
        return first + second;
    }
    return isEven(first) ? second : first;
}
console.log(mathIteration(11, 112));