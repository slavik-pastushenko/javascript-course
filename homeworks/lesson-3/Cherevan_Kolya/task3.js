
//solution1 

const num1 = prompt();
const num2 = prompt();

const numGenerated = (param1, param2) => {
    if (((param1 && param2) !== null) && ((param1 && param2) !== "")) {
        switch (true) {
            case ((param1 % 2 === 0 && param2 % 2 === 0)):
                return param1 * param2
            case ((param1 % 2 !== 0 && param2 % 2 !== 0)):
                return Number(param1) + Number(param2)
            case (param1 % 2 !== 0):
            default:
                return param2
        }

    }
    return 'enter just a 2 numbers!';
}

console.log(numGenerated(num1, num2))


const num1 = +prompt();
const num2 = +prompt();

function numChecked(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1 * num2;
    } else if (num1 != num2) {
        return ((num1 % 2 === 0)) ? num2 : num1;
    } else {
        return num1 + num2
    }
}
console.log(numChecked(num1, num2))

