
let input = 4;
function NumCheck(check) {
    if (typeof check == 'number'){
        return check + "";
    } else {
        return "This is not a number";
    }
}
console.log(NumCheck(input));
