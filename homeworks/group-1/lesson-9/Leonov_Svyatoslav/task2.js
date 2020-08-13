function isPass(password){
    if(password.length <= 32){
        const arr = password.slice('');
        let upper = 0;
        let lower = 0;
        let nums = 0;
        for(x = 0; x < arr.length; x++){
            if(/[A-Z]/.test(arr[x])){
                upper++;
            } else if(/[a-z]/.test(arr[x])){
                lower++;
            } else if(/[0-9]/.test(arr[x])){
                nums++;
            } else{
                return false; //тут прям промис подходит))
            }
        } 
        if(upper <= 26 && lower <= 26 && nums <= 10){
            return true;
        } else{
            return false;
        }
    } else {
        return false;
    }
}
console.log(isPass("qqqqqqqqqqqqqqqqqqqqqqqqqqq"));