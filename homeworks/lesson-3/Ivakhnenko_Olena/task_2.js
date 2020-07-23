// Создайте массив arr = ['a', 'b', 'c', 'd']
// и с его помощью выведите на экран строку 'a+b, c+d'.
//     Знания которые понадобятся: Методы массива, строковые литералы.

const array = ['a', 'b', 'c', 'd'];
let resultArray = [];

array.forEach((value, index) => {
    if (index === 0 || index % 2 === 0) {
        resultArray.push(array[index] + '+' + array[index+1]);
    }
})
console.log(resultArray);
