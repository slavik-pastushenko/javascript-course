function chet(a, b){
    if (a%2===0 && b%2===0){
        return a*b;
    } else if (a%2!==0 && b%2!==0){
        return a+b;
    } else if (a%2!==0){
        return a;
    } else if (b%2!==0){
        return b;
    }
}
var a = 8
var b = 2
var c = chet(a, b);
console.log(c);