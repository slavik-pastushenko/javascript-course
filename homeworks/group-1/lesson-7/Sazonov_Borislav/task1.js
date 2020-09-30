function myPromise(x) {
    return new Promise((resolve,reject) => {
        if (x > 10) {
            resolve('Good');
        } else {
            reject('Error');
        }
    })
}

const result = myPromise(13).then(message => console.log(message)).catch(error => console.log(error));