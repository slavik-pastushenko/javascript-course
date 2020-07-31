const arrCar = [
  { model: 'BMW', creationDate: 2020 },
  { model: 'Audi', creationDate: 2015 },
  { model: 'Volvo', creationDate: 2019 },
  { model: 'Mercedes', creationDate: 2010 },
];
function sotrfun(arrCar){
	return arrCar.sort((a, b) => a.creationDate > b.creationDate?  1: -1);
}
console.log(sotrfun(arrCar))
