//Date.prototype.getMilliseconds()------Возвращает миллисекунды (0-999) указанной даты по местному времени.

const Today = new Date();

function SecondsOfDay(date){
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(SecondsOfDay(Today));


