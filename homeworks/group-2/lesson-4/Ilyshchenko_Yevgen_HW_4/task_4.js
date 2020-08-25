const sum = (n) => {
    let resalt = 0;
    let counter = 0;
    let mas = [];
    if (n < 0) return `${n} > 0`;
    if (n === 0) return ` 0 = 0`
    if (typeof n !== "number") return " enter number";
    if (n > 0) {
        for (i = 0; i <= n; i++) {
            mas.push(i);
            counter += i

        }
        let s = mas.join('+')
        resalt = (`${s} = ${counter}`)
    };
    return resalt
}
console.log(sum(9))
console.log(sum(-2))
console.log(sum('jkm'))
console.log(sum(0))