let input_1 = 34;
let input_2 = 34;

function numberChecker(first, second){
    if (first % 2 === 0 && second % 2 === 0){
        return first * second;
    } else if (!(first % 2 === 0) && !(second % 2 === 0)){
        return first - second;
    } else if (!first % 2 === 0 && second % 2 === 0){
        return `нечётное число ${first}`;
    } else if (first % 2 === 0 && !second % 2 === 0){
        return `нечётное число ${second}`;
    }
}
console.log(numberChecker(input_2, input_1));