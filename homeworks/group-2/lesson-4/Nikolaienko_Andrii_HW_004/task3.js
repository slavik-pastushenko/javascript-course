let num = [1, 2, 3, 4, 5];
let numCar = num.map(function(elem) {
	return (elem[0] + 'машина',elem[1] + 'машины',elem[2] + 'машины',elem[3] + 'машины',elem[4] + 'машин')
});
console.log(numCar)