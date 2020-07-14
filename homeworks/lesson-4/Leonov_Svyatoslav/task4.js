let answer = 0;
function Sum(number) {
    if (number <0){
        answer = `${number} is < 0`;
    } else {
       for (x = 0; x <= number; x++){
        answer += x;
        } 
    }
    return answer;
}
console.log(Sum(6));