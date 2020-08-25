function checktype (num = 1){
    if(typeof num === 'number'){
       num.toString();
}else{
    ( 'введено не число');
    console.log(num);
}
}