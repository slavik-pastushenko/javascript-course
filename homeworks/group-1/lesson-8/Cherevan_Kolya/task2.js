
const currentDay = new Date();

function FromYesterday(date) {
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
}

FromYesterday(currentDay)

