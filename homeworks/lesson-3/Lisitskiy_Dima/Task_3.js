const Num1 = param();
const Num2 = param();

function findnums (one, two) {
    if (one % 2 === 0) && (two % 2 === 0) {
        return one * two;
    } 
    else if ((one % 2 !== 0) && (two % 2 !== 0)) {
        return one + two;
    } 
    else if ((one % 2 !== 0) && (two % 2 === 0)) {
        return `first number ${one}`;
    }
    else ((one % 2 === 0) && (two % 2 !== 0)) {
        return `second number ${two}`
    }
}

alert (findnums (Num1, Num2)) 