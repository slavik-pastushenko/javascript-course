const arrayObjects = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 }
];

//sorting with function Array.sort
function sortFunction(firstElement, secondElement) {
    return firstElement.creationDate > secondElement.creationDate ? 1 :
        firstElement.creationDate < secondElement.creationDate ? -1 : 0;
}

const arrayNew = arrayObjects.slice().sort(sortFunction);
console.log(arrayNew);