// Создайте функцию, которая принимает массив объектов и возвращает новый массив. 
// Новый массив должен быть копией оригинального массива, который приняли в качестве параметра функции, 
// но при этом отсортирован по дате выпуска автомобиля. Массив:
// [
//   { model: 'BMW', creationDate: 2020 },
//   { model: 'Audi', creationDate: 2015 },
//   { model: 'Volvo', creationDate: 2019 },
//   { model: 'Mercedes', creationDate: 2010 },
// ];

//Теория: Array.prototype.sort()

const carsArr = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
];

function newArr (carsArr) {
    return carsArr.sort ((a, b) => a.creationDate - b.creationDate);
}
console.log(newArr(carsArr))

//const newArr = carsArr => carsArr.sort ((a, b) => a.creationDate - b.creationDate); Решение Славика