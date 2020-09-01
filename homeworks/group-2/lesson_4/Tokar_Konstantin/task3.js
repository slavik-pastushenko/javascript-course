let a = [1, 2, 3, 4, 5];
let b = a.map(x => x === 1 ? x + ' машина' : x === 5 ? x + ' машин' : x + ' машины');
console.log(b);