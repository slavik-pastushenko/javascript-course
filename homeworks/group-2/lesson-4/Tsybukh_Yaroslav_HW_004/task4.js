function func(num){
    if(num > 0){
        let arr = []
        sum = 0
            for (i=0 ; i<=num ; i++){
                arr.push(i)
                sum += i
                }
            let sign = arr.join("+")
                result = `${sign} = ${sum}`
        return result
    }
    if(num < 0){
        return `${num} < 0`
        }
    if(num == 0){
        return `${num}`
    }
}
let resultFirst = func(9)
console.log(resultFirst)
let resultSecond = func(-3)
console.log(resultSecond)
let resultThird = func(0)
console.log(resultThird)