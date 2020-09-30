 function funNum(number) {
    return new Promise((resolve, reject) => {
      if (number>10) {
        resolve("Успех")
      } if (number<10){
        reject("Ошибка")
      }
    })
  }
  
  const promise = funNum(number); 
  promise
  .then((message) => {console.log(message); })
  .catch((message) => {console.log(message); });