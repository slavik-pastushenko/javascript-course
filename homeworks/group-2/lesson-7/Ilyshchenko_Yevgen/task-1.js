// const xz = number => new Promise((resolve, reject) => {
//     if(number > 10){
//     resolve('number > 10')
// } else {
//     reject('number < 10')
//     }
// })

// xz(9)
//     .then((masseg) => console.log(masseg))
//     .catch(err => console.log(err))
    
//option-2
async function xz2(number) {
    if (number > 10) return resolve('number > 10')
    if (number < 10) return reject('number < 10')
}

const equally = await xz2(11)
console.log(equally(11)