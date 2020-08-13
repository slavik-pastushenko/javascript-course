let input1 = 42;
let input2 = 42;

function NumCheck(first, second){
    if (first % 2 === 0 && second % 2 === 0){
        return first * second;
    } else if (!(first % 2 === 0) && !(second % 2 === 0)){
        return first - second;
    } else if (!first % 2 === 0 && second % 2 === 0){
        return `Это нечётное число - ${first}`;
    } else if (first % 2 === 0 && !second % 2 === 0){
        return `Это нечётное число - ${second}`;
    }
}
console.log(NumCheck(input1, input2)); 


function isEven(num) {
    if (typeof num === 'number'){
        return parseFloat(num % 2 === 0);
    }
    return num % 2 === 0;
}
console.log(isEven(40));


