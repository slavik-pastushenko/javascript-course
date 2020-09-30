const manipulation = (firstNumber, secondNumber) => {
    a=firstNumber%2;
    b=secondNumber%2;
    if (a==0 && b==0) {
        return firstNumber*secondNumber;
    }
    else if (a>0 && b>0){
        return firstNumber+secondNumber;
    }
    else if (a>0 && b==0){
        return firstNumber;
    }
    else{
        return secondNumber;
    };
};
//вызов и проверка:
a1 = manipulation(4,4);
b1 = manipulation(3,5);
c1 = manipulation(2,5);
d1 = manipulation(3,8);
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);