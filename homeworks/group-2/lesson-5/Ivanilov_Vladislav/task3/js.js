const arr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]];

arr.forEach((value)  => {
    value.forEach ((innerValue1) => {
        if (innerValue1 === 4) console.log(innerValue1);
    })
});
