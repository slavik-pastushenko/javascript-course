// solution1

let randNumber = 1000;
let iterations = 0;
while (randNumber >= 50) {
    randNumber /= 2;
    iterations++;
}
console.log(randNumber, iterations)

// solution2

function pow(randNumber, n) {

    if (randNumber < 50) {
        return console.log(randNumber, iterations);
    } else {
        ++iterations;
        return pow(randNumber / n, n);
    }
}
pow(randNumber, 2)

