const arr = [4, 2, 5, 19, 13, 0, 10];

let coube = 0;
for (x = 0; x < arr.length; x++) {
    coube += Math.pow(arr[x], 3)
}
console.log(Math.sqrt(coube));