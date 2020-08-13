const carArr = [
    { model: 'BMW', creationDate: 2020 },
    { model: 'Audi', creationDate: 2015 },
    { model: 'Volvo', creationDate: 2019 },
    { model: 'Mercedes', creationDate: 2010 },
  ];

  carArr.sort(function(a,b) {
      return a.creationDate - b.creationDate;
    });

  console.log(carArr);