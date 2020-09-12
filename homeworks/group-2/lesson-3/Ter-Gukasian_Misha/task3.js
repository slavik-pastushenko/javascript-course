function num (first, second){
if(first && second % 2 == 0){
    return first * second;
}else if(first && second % 2 !== 0){
    return first + second;
}else if (first % 2 ==0 && second % 2 !== 0){
    return first;
}else{
    return second;
}
}
let recult = num(4,2)
console.log(recult);
