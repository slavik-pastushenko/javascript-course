function chekNum (numOne, numTwo) {
    if ((numOne === Number(numOne)) && (numTwo === Number(numTwo))) {
	} else {
        alert("Вы ввели не число");
        return
    }

    if ((numOne % 2 == 0) && (numTwo % 2 == 0)) {
        const prr = numOne * numTwo;
        alert(prr);
        return
    } else if ((numOne % 2 == 1) && (numTwo % 2 == 1)) {
        const prrr = numOne + numTwo;
        alert(prrr);
        return
    } else if ((numOne % 2 == 1) && (numTwo % 2 == 0)) {
        alert(numOne)
        return
    } else {
        alert(numTwo);
        return
    }
}


let numm = prompt('Введи первое число');
let nummm = prompt('Введи второе число');
numm = Number(numm);
nummm = Number(nummm);
chekNum(numm, nummm);

