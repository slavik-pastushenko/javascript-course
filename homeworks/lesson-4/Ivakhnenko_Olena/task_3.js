let array = [1, 2, 3, 4, 5];

let result = array.map((value) => {
    if (value === 1) return value + ' машина';
    if (value === 5) return value + ' машин';
    return value + ' машины';
})

console.log(result);