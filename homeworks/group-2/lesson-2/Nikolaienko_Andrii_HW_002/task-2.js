const minute = prompt('time???(minute)');
if (minute >= 0 && minute <= 15) {
    alert("1/4 part hour");
} else if ((minute > 15) && (minute <= 30)) {
    alert("2/4 part hour");
} else if ((minute > 30) && (minute <= 45)) {
    alert("3/4 part hour");
} else if ((minute > 45) && (minute <= 59)) {
    alert("4/4 part hour");
} else {
    alert("не так не покатит 404 и все такое ");
}
// v-2 
const minute = prompt('time???(minute)');
switch (true) {
    case minute >= 0 && min < 15:
        alert ("1/4 part hour");
    break;
    case minute < 30:
        alert ("2/4 part hour");
    break;
    case minute < 45:
        alert ("3/4 part hour");
    break;
    case minute < 59: 
        alert ("4/4 part hour");
    break;
    default:
        alert("404");
}
