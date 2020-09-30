function checkSeconds(year,month,day){
    const dayNow = new Date()
    const dayStart = new Date (year,month,day)
    const result = dayNow - dayStart
        return result/1000
}
console.log(checkSeconds(2020,08,14))