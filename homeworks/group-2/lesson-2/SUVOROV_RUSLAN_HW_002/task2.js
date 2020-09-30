const minute = +prompt('На каком числе минутная стрелка?');
if (minute>=0 && minute<16) {
    alert('Первая четверсть часа!')
}
else if (minute>=16 && minute<31) {
    alert('Вторая четверсть часа!')
}
else if (minute>=31 && minute<46) {
    alert('Третья четверсть часа!')
}
else if (minute>=46 && minute<59) {
    alert('Четвёртая четверсть часа!')
}
else alert('Вы ввели неправильное значение!');
