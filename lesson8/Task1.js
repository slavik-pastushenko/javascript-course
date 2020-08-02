function DayofWeek(date) {
    const Days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return Days[date.getDay()];
}

let date = new Date(2020, 0, 7);

console.log(DayofWeek(date));
