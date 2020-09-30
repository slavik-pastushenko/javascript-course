const minute = +prompt("Введите число от 0 до 59")
    if(minute >= 0 && minute <= 15){
        alert("Первая четверть")
    }else if (minute > 15 && minute <= 30 ) {
        alert("Вторая четверть")
    }else if (minute > 30 && minute <= 45 ) {
        alert("Третья четверть")
    }else if (minute > 45 && minute < 60 ) {
        alert("Четвертая четверть")
    }else{
        alert("Ошибка!")
    }