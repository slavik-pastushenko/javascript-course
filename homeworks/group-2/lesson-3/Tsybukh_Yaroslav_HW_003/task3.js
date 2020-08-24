function func(num1 , num2){
    if(num1 % 2 == 0 && num2 % 2 == 0){
        return num1 * num2
    }else if(num1 % 2 !== 0 && num2 % 2 !== 0){
        return num1 + num2;
    }else if(num1 % 2 !== 0 && num2 % 2 == 0){
        return num1; 
    }
    else{
        return num2;
    }
}
let result = func(24,1)
console.log(result)