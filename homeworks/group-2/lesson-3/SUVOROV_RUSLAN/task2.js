const mas = ['a', 'b', 'c', 'd'];
const lngth = (arr) => {
    b = arr.join('+');
    c = b.replace('b+','b, ');
    console.log(c);
};
lngth(mas);

//Второй вариант в одну строку, но без изпользования методов
console.log(`${mas[0]}+${mas[1]}, ${mas[2]}+${mas[3]}`);

