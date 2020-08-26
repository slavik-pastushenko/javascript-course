function checktype (num = 1){
    if(typeof num === 'number'){
       return `${num}`
}else{

    return'введен не правильный тип';
}
}
console.log(checktype('5'));