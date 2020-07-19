const array1 = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
];

function sortArr (arr){
    let newArray;
    return newArray = arr.sort(function(a, b){
        console.log(a, b);
        return a.creationDate - b.creationDate;
        });
}
console.log(sortArr(array1));