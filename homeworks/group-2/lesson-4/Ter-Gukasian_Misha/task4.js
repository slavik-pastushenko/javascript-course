const sumNambers = (num) => {
    if (typeof num !== 'number') return 'Это не число';
    if (num<0) return `${num} < 0`;
    if (num===0) return `0`;
    if (num>0) {
        let arr = [],
            sum = 0;
        for (i=0 ; i<=num ; i++){
                arr.push(i);
                sum += i
                }
            let str = arr.join("+"),
                result = `${str} = ${sum}`;
        return result
    }
};
console.log(sumNambers(-15));
console.log(sumNambers(0));
console.log(sumNambers(25));
console.log(sumNambers('привет'));