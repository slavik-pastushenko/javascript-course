let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (x = 0; x < arr.length; x++) {
    sum += Math.pow(arr [x],3);
}
console.log(Math.sqrt(sum));