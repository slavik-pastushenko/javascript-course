//Дан массив `[4, 2, 5, 19, 13, 0, 10]`. 
//Найдите квадратный корень из суммы кубов его элементов. 
//Для решения воспользуйтесь for & Math.

const numbersArr = [4, 2, 5, 19, 13, 0, 10];
let number = 0;
for (let n = 0; n < numbersArr.length; n++) {
    number += Math.pow(numbersArr[n], 3);
}

console.log(Math.sqrt(number))
