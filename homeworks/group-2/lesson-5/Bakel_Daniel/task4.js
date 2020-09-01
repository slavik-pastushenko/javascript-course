'use strict';

const arr = [
  { model: 'BMW', creationDate: 2020 },
  { model: 'Audi', creationDate: 2015 },
  { model: 'Volvo', creationDate: 2019 },
  { model: 'Mercedes', creationDate: 2010 },
];

function sortArrays(arr) {
  return arr.sort((prev, next) => prev.creationDate - next.creationDate);
}

console.log(sortArrays(arr));