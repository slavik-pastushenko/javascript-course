
const sortOfYear = (a, b) => {
    if (a.creationDate > b.creationDate) {
        return 1;
    }
    if (a.creationDate < b.creationDate) {
        return -1;
    }

    return 0;
}

const newAvto = [];
const avto = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2017 },
    { model: 'Mercedes', creationDate: 2010 },
];
const sortAvto = (avto) => {
    return avto.sort(sortOfYear);
}
console.log(sortAvto(avto))