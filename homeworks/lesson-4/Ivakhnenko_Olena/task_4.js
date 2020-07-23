function sumNumbers(number) {
    if (number === 0) return 0;
    if (number < 0) return `${number} < 0`;

    let counter = 0;
    let sum = 0;
    let resultArray = [];
    while (counter <= number) {
        sum += counter;
        resultArray.push(counter);
        counter++;
    }
    result = resultArray.join('+') + ' = ' + sum;
    return result;
}

console.log(sumNumbers(15));
