
// solution 1
const someNumb = +prompt();

function sumNumb(param) {
    if (Math.sign(param) === 1) {
        return param + 1;
    } else if (Math.sign(param) === -1) {
        return `${param} < 0`;
    } else {
        return 0;
    }
}

function resultFunction(param) {
    if (sumNumb(param) > 0) {
        const returnedString = [];
        let sumResult = 0;
        for (let i = 0; i < sumNumb(param); i++) {
            returnedString.push(i);
            sumResult += i;
        }
        return `${returnedString.join('+')} = ${sumResult}`;
    }
    return sumNumb(param);
}

console.log(resultFunction(someNumb))

// solution 2

function checkedNumber(param) {
    return Math.sign(param) === 1 ? param : param === 0 ? 0 : `${param} < 0`;
}

const finallyFunction = (funct) => {
    let i = -1;
    const newArr = [];
    while (i < funct) {
        ++i;
        newArr.push(i);
    }
    const sum = newArr.reduce((a, currentNum) => a + currentNum);
    return `${newArr.join('+')} = ${sum}`
}

console.log(finallyFunction(checkedNumber(someNumb)))

