const number = (a) => {
    if (typeof a === "number") return a = String(a)
    if (typeof a !== "number") return 'it`s not a number'
}
console.log(number('g'))   
console.log(number(21))  
