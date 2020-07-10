// first solution

const inputMinute = +prompt();

switch (true) {
    case (inputMinute <= 15):
        alert('first half');
        break;
    case (inputMinute <= 30):
        alert('second half')
        break;
    case (inputMinute <= 45):
        alert('third half')
        break;
    default:
        alert('fourth half')
}

// 2-nd solution

const inputMinute = +prompt();
if ((inputMinute <= 59) && (inputMinute != 0)) {
    if (inputMinute <= 15) {
        alert('first')
    } else if (inputMinute <= 30) {
        alert('second')
    } else if (inputMinute <= 45) {
        alert('third')
    } else {
        alert('fourth')
    }
} else {
    alert('the number must be less than 59 and not equal zero')
}
