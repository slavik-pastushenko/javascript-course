const arrCar =
[{ model: 'BMW', creationDate: 2020 },
{ model: 'Audi', creationDate: 2015 },
{ model: 'Volvo', creationDate: 2019 },
{ model: 'Mercedes', creationDate: 2010 },
];
let carSort = arrCar
carSort = carSort.sort(function(a, b) {
  return a.creationDate - b.creationDate;
});
console.log(carSort);
