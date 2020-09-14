const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
const date = new Date(2020 , 0 , 7)
const day = date.getDay()
console.log(days[day])