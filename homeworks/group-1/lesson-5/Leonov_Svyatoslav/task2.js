let array = [4, 2, 5, 19, 13, 0, 10];
let cubeSum = 0;
for (x = 0; x < array.length; x++){
    cubeSum += Math.pow(array[x], 3);
}
console.log(Math.sqrt(cubeSum));