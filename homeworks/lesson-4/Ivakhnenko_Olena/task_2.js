const arrayNumbers = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i <= arrayNumbers.length; i++) {
    if (arrayNumbers[i] === 4) {
        console.log('Есть!');
        break;
    }
}