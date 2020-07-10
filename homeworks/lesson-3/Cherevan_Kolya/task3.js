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

