const arr = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
  ]; 
  function newArr (arr) {
    return arr.sort((a, b) => a.creationDate > b.creationDate ? 1 : -1);
  }
  
  console.log(newArr(arr))