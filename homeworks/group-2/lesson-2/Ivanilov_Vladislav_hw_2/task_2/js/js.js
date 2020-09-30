const minutes  = +prompt('how many minutes now?');
if (minutes>=0 && minutes<16){
    alert('First quarter of an hour')
}
else if (minutes>=16 && minutes<31){
    alert('Second quarter of an hour')
}
else if (minutes>=31 && minutes<46){
    alert('Third quarter of an hour')
}
else if (minutes>=46 && minutes<59){
    alert('Fourth quarter of an hour')
}
else alert('no such option');