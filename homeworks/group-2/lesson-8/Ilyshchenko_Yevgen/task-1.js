var days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
] 
const searchDay = (a) => {  
    let data = new Date(a).getDay()
    return days[data] 
}
console.log(searchDay('January 7, 2020' ))