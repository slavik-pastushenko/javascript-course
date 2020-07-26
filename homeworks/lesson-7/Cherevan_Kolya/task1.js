
const someNumb = 5;
const retNum = (num) => new Promise((resolve, reject) =>
    num > 8 ?
        resolve(1) :
        reject(err))
retNum(someNumb)
    .then(() => console.log(1))
    .catch(() => console.log(new Error('that number not true').message))
