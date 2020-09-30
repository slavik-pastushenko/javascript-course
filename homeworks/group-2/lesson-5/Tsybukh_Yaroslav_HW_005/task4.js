function func(arr){
 let newArray = arr.sort((a,b) => a.creationDate - b.creationDate);
    return newArray
}
let result = func([
                    { model: 'BMW', creationDate: 2020 },
                    { model: 'Audi', creationDate: 2015 },
                    { model: 'Volvo', creationDate: 2019 },
                    { model: 'Mercedes', creationDate: 2010 },
                ])
                console.log(result)
