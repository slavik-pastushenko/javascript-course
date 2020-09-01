function inttostr(a){
    if (typeof(a) != "number"){
        return console.log("is not number");
    } else {
        a=a+''
        return a+'1';
    }
}
var a = 5;
console.log(typeof(a));
a=inttostr(a);
console.log(typeof(a));