function myPromise(x) {
    return new Promise((resolve,reject) => {
        if (x > 10) {
            resolve('Success');
        } else {
            reject('Enter another number');
        }
    })
}

const result = myPromise(11).then(message => console.log(message)).catch(error => console.log(error));