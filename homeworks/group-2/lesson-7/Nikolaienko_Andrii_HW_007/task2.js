const arr1 = [1, 2, null, 3];
const arrChecked = arr1.includes(null);
let promise = new Promise((resolve, reject) => {
    if (!arrChecked) {
        setTimeout(() => {
            resolve("result");
        }, 3000);
    } else {
        reject()
    }
});
promise
    .then(() => {alert(arr1.pop());},)
    .catch (() => alert('error'))
//
const arr = [3, 18, null, 25, 88];
async function checkNull(array) {
    if (array.every(element => element !== null)) {
        return setTimeout(() => console.log(array.pop()), 3000);
    }
    else  {
        return console.log('ErrorArray includes null');
    }
}
checkNull(arr)
.then(result => result);
