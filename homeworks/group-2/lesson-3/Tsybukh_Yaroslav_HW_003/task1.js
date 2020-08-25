function func(num){
    if(typeof  num !== "number"){
        return "Не число";
    }
    return String(num);
}
let result = func(11)
console.log(result)