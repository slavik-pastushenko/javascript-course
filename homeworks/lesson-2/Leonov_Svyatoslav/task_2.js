const minute = 20;
if (minute >= 0 && minute <= 15){
    alert("first part");
} else if (minute > 15 && minute <= 30 ){
    alert("second part");
} else if (minute > 30 && minute <= 45 ){
    alert("third part");
} else if (minute > 45 && minute <= 59 ){
    alert("fourth part");
} else {
    alert("error");
}