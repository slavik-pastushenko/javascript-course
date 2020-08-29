let cars = [1, 2, 3, 4, 5];
const add = cars.map(str = (car) => {
    if (car === 1) return `${car} машина`;
    if (car > 1 && car < 5) return `${car} машины`;
    if (car >= 5 && car<=20) return `${car} машин`;
} );
cars=add;
console.log(cars)