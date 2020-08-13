const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

array.forEach((value) => {
    value.forEach((innerValue) => {
        if (innerValue === 4) console.log(innerValue);
    })
});

