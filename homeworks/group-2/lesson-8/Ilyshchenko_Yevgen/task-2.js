// Реализовать функцию, которая возвращает количество секунд с начала дня до настоящего момента времени.
let timeToDay = new Date()

const findSeconds = (a) => {
    let enterDay = new Date(a)
    return (timeToDay - enterDay) / 1000
}
console.log(findSeconds('September 9, 2020' ))

