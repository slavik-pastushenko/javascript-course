// Создайте функцию, которая принимает массив объектов и возвращает новый массив. Новый массив должен быть копией оригинального массива, который приняли в качестве параметра функции, но при этом отсортирован по дате выпуска автомобиля. Массив:

const cars = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
  ];

  function sortCars (car) {
    let carsData = [];
    return carsCreationDate = car.sort(function(a,b){
        console.log(a, b);
        return a.creationDate - b.creationDate;
        });   
  }

  console.log(sortCars(cars))