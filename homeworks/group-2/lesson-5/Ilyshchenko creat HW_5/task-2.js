const masiv = [4, 2, 5, 19, 13, 0, 10];
let cube = masiv.map(function (x) { return Math.pow(x, 3); }); 
console.log(cube) 
let sum = cube.reduce(function (a, b) { return a + b });
console.log(sum)
let squareRoot = Math.sqrt(sum);
console.log(squareRoot)

// option-2
let cube2 = [];
for (i in masiv) {
    cube2[i] = masiv[i] **3  //Math.pow(masiv[i], 3) 
}
console.log(cube2)
let sum2 = 0;
for (i in cube2) {
    sum2 += cube2[i]
}
console.log(sum2)
let squareRoot2 = Math.sqrt(sum2)
console.log(squareRoot2)