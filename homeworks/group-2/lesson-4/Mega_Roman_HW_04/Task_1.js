//Дан массив со строками. Оставьте в нем только те строки,
//длина которых больше 5-ти символов. 
//Реализовать через метод filter.

const stringsArr = ['Chevrolet', 'BMW', 'VW', 'Renault', 'Lamborgini', 'Mclaren'];

let result = stringsArr.filter(item => item.length > 5);

console.log(result)