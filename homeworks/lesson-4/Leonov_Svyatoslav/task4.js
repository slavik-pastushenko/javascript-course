let answer = 0;
function Sum(number) {
    if (number <0){
        return `${number} is < 0`;
    } else if (number == 0){
        return 0;
    } else {
        var sumAnsw = 0;
        for (x = 1; x <= number; x++){
        answer += `+${x}`;
        sumAnsw += x;
        } 
        return `${answer} = ${sumAnsw}`;
    }
    
}
console.log(Sum(6));