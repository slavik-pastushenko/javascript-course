const someArr = [1, 2, 5, 9, 4, 13, 10];

// solution1
for (var i = 0; i < someArr.length; i++) {
    if (someArr[i] === 4) {
        console.log(`Есть! На позиции ${i}`)
        break;
    }
}

// solution2
for (let j = 0; j < someArr.length; j++) {
    if (someArr[j] === 4) {
        console.log('include')
        break;
    }
}

// solution3
if (someArr.includes(4)) console.log('Есть!') 