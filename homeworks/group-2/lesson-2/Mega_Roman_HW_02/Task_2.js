const minute = +prompt(20);

if (minute >= 0 && minute < 15) {
    console.log('quater = 1');
} else if (minute >= 16 && minute <= 30) {
    console.log('quater = 2');
} else if (minute >= 31 && minute <= 45) {
    console.log('quater = 3');
} else if (minute >= 46 && minute <= 60) {
    console.log('quater = 4');
} else {
    console.log('error')
}
