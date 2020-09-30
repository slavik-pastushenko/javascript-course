let  arr = [4, 2, 5, 19, 13, 0, 10]
let kyb = arr.map(function(elem) {
    return elem*elem*elem;
});
let sum = 0;
for (let i = 0; i <kyb.length; i++) {
    sum += kyb[i];}
console.log(Math.sqrt(sum));