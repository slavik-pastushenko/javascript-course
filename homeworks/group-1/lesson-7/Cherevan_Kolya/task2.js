const someArr = [1, 2, null, 3];
const arrChecked = someArr.includes(null);
let promise = new Promise((resolve, reject) => {
    if (!arrChecked) {
        setTimeout(() => {
            resolve("result");
        }, 1000);
    } else {
        reject()
    }
});
promise
    .then(
        () => {
            alert(someArr[someArr.length - 1]);
        },
    )
    .catch (
        () => alert('error')

    )

// second solution
async function tryCatch() {
    let promise = new Promise((resolve, reject) => {
        if (!arrChecked) {
            setTimeout(() => resolve('done'), 3000) // зачем оборачивать resolve в анонимную фукнцию?
        }
        else {
            setTimeout(() => reject(new Error('null is consist')), 3000)
        }
    });
    try {
        const res = await promise; //почему не promise()?
        console.log(res) // промис возвращает все то, что находится в параметрах метода resolve? 
    }
    catch (e) {
        console.log(e.message)
    }
}
tryCatch()
