const twoNamber = (a, b) => {
    if (typeof a !== 'number' & typeof b !== 'number') return 'enter the number';
    if (a % 2 === 0 && b % 2 === 0) return a * b;
    if (a % 2 !== 0 && b % 2 !== 0) return a + b;
    if (a % 2 !== 0) return a;
    if (b % 2 !== 0) return b;
}

console.log(twoNamber('yo'))
console.log(twoNamber(2, 4))
console.log(twoNamber(3, 7))
console.log(twoNamber(8, 5))
console.log(twoNamber(3, 10))
