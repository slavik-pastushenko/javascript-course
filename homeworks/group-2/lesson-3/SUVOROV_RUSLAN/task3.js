const manipulation = (firstNumber, secondNumber) => {
    a=firstNumber%2;
    b=secondNumber%2;
    if (a==0 && b==0) {
        console.log(firstNumber*secondNumber);
    }
    else if (a>0 && b>0){
        console.log(firstNumber+secondNumber);
    }
    else if (a>0 && b==0){
        console.log(firstNumber);
    }
    else{
        console.log(secondNumber);
    };
};
manipulation(4,4);
manipulation(3,5);
manipulation(2,5);
manipulation(3,8);