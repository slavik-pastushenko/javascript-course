function sortByYear(i) {
    return i.sort((a, b) => a.creationDate > b.creationDate ? 1 : -1);
  };
const cars = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
  ];
console.log(sortByYear(cars))
