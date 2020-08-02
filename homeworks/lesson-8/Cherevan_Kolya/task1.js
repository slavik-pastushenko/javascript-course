
const someDate = new Date('January 7, 2020');
const daysOfWEek = [' Пн', 'Вт', 'Ср', ' Чт', ' Пт', 'Сб', 'Вс']

function searchDay(date) {
    return daysOfWEek[date.getDay() - 1];
}
console.log(searchDay(someDate))
