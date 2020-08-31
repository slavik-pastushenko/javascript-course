const chenge =[1, 2, 3, 4];
function findNumber(ourArray, isTrue) {
    if (isTrue) {
        return Math.min(...chenge);
    }
    return Math.max(...chenge);
}
console.log(findNumber([1, 2, 3, 4], true));
console.log(findNumber([1, 2, 3, 4], false));