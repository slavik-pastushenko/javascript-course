 let number = 1000;
let totalIterations = 0;

while (number >= 50) {
    number /= 2;
    totalIterations++
}
console.log(totalIterations)


// option-2

const count = (numberNew, n) => {
    if (numberNew >= 50) {
        totalIterations++;
        return count(numberNew/2, n)
    } else { console.log(totalIterations)}
} 
    
count(1000, 2);