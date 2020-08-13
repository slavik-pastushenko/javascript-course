const arr = [4, 2, 5, 19, 13, 0, 10];
let sumSqrt = 0;

for (i = 0; i < arr.length; i++) {
    sumSqrt += Math.pow(arr[i], 3);
};

console.log(Math.sqrt(sumSqrt));
