// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. Реализовать через метод filter.

const zoo = ["fish", "turtle", "lion", "monkey","hippopotamus"];

console.log(zoo.filter(item => item.length > 5))