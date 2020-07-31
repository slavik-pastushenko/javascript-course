const arr = [1, 2, 3, 4, 5];
let arrCar = arr.map(function(num){
	if (num === 1){
		return `${num} машина`;
	} else if (num === 5){
		return `${num} машин`
	} else (num >1 && num <5){
		return `${num} машины`
	}
})
console.log(arrCar);


