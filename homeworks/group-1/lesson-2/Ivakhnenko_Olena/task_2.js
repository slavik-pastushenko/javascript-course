const minute = 20;
let quarter = '';

if (minute >= 0 && minute < 15) {
    quarter = 'first';
} else if (minute >= 15 && minute < 30) {
    quarter = 'second';
} else if (minute >= 30 && minute < 45) {
    quarter = 'third';
} else if (minute >= 45 && minute <= 60) {
    quarter = 'forth';
}

if (quarter) {
    console.log('Time is in the ' + quarter + ' quarter of an hour');
} else {
    console.log('Time is unknown');
}