function sumpre(x){
    if (x<0)
        return `${x} < 0`;
    else if(x === 0) 
        return  '0';
    else 
        return x*(x+1)/2;
}

let a = 6;
console.log(sumpre(a));