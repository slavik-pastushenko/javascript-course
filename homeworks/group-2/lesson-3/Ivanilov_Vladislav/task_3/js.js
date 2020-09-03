const numb1 = +prompt('enter a number');
const numb2 = +prompt('enter a number');

function numbSum (numb1, numb2) {
    if (numb1 % 2 === 0 && numb2 % 2 === 0) {
        return  numb1 * numb2 ;
    } else if (numb1 % 2 !== 0 && numb2 % 2 !== 0) {
        return  numb1 + numb2;
    } else if (numb1 % 2 === 0 && numb2 % 2 !==0){
        return  numb2;
    }
}
alert(numbSum(numb1, numb2))
