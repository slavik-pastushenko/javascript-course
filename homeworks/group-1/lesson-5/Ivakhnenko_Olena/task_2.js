const arr = [4, 2, 5, 19, 13, 0, 10];

function getSqrtFromCubeNumbers(arrayNumbers) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return Math.sqrt(sum);
}

console.log(getSqrtFromCubeNumbers(arr));