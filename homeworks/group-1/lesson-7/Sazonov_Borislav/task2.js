let arrayValue = [5, 15, 'abs', 'xyz', 7, 11];

function checkNullPromise(array) {
    return new Promise((resolve, reject) => {
        if (array.every(element => element !== null)) {
            setTimeout(() => resolve(array.pop()), 3000);
        } else {
            reject('null');
        }
    })
}

const check = checkNullPromise(arrayValue)
    .then(result => console.log(result))
    .catch(error => console.log(error));