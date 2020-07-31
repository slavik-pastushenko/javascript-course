const arr = [4, 2, 5, 19, 13, 0, 10];
let ante = 0;
for (let i = 0; i <arr.length; i++) {
	ante +=Math.pow(arr[i], 3);
}
console.log(Math.sqrt(ante))
