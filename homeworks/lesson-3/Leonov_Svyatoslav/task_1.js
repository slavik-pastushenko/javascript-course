let input = 2;
function isNumber(check) {
    if (typeof check == 'number'){
        return check + "";
    } else {
        return "Something went wrong";
    }
}
console.log(isNumber(input));