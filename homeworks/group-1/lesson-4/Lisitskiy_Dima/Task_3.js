const arrCars = [1, 2, 3, 4, 5];

const Carsnames = arrCars.map(car => {
    if (car == 1){
        return `${car} машина`;
    } else if (car >= 2 && car <= 4){
        return `${car} машины`;
    } else if (car == 5){
        return `${car} машин`;
    }
});

console.log(Carsnames)