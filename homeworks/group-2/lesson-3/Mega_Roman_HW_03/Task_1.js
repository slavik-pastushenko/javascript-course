const numb = 2;

function generateString(numb) {
    if (numb == numb) return `${numb}`;
    return 'Строка, не число';
}

console.log(generateString(numb))