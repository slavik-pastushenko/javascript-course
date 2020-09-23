// const xz = number => new Promise((resolve, reject) => {
//     if(number > 10){
//     resolve('number > 10')
// } else {
//     reject('number < 0')
//     }
// })

// xz(9)
//     .then((masseg) => console.log(masseg))
//     .catch(err => console.log(err))
    
//option-2
async function xz2(number) {
    if (number > 10) return resolve('number > 10')
    if (number < 0) return reject('number < 0')
}

const equally = await xz2(11)