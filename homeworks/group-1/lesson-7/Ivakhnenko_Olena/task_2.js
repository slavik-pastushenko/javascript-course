let arrayValue = [3, 48, 'sun', 'promise', 745, 14];

function checkNullPromise(array) {
    return new Promise((resolve, reject) => {
        if (array.every(element => element !== null)) {
            setTimeout(() => resolve(array.pop()), 3000);
        } else {
            reject('Array includes null');
        }
    })
}

const check = checkNullPromise(arrayValue)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ------------------------------------------------  //

async function checkNull(array) {
    if (array.every(element => element !== null)) {
        return array.pop();
    }
    throw  new Error('Array includes null');
}

async function delayResolve(array)
{
    try {
        let lastElement = await checkNull(array);
        return setTimeout(() => console.log(lastElement), 3000);
    } catch (e) {
        return console.log(e.message);
    }
}

delayResolve(arrayValue).then(result => result);