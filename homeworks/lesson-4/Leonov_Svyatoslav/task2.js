let array = [1, 2, 5, 9, 4, 13, 4, 10];

for (x = 1; x <= array.length; x++){
    if (array[x - 1] === 4){
        console.log('Есть!');
        break;
    }
}