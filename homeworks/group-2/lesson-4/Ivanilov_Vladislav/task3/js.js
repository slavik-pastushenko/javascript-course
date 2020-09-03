const numb = prompt('Ведите номер машины')[1, 2, 3, 4, 5];

const numbCar = numb.map ((value) => {
    if (value ===1) return value + 'машина';
    if (value===5) return value + 'машин';
    else return value + 'машины'
    })
alert(numbCar);