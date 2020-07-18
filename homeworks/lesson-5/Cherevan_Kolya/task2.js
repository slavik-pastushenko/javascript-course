const arr = [4, 2, 5, 19, 13, 0, 10];

var result = 0;
for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 3)
}

console.log(Math.sqrt(result))