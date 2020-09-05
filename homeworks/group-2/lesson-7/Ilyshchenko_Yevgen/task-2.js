// const masiv = mas => new Promise((resolve, reject) => {
//     let x = mas.includes(null)
//     console.log(x)
//     if (!x) {
//         (setTimeout(function () {
//             let lastMas = mas[mas.length - 1]
//             return resolve(lastMas)
//         }, 3000))
//     }else {
         
//         reject("masive includs Null")
            
//         }
//     })

// masiv([1, null, 10, 30, 0, 5])
//     .then(enterLastIndex => console.log(enterLastIndex))
//     .catch(masseg => console.log(masseg))

//options-2

async function masiv(mas){
    let x = mas.includes(null)
    console.log(x)
    if (!x) {
        (setTimeout(function () {
            let lastMas = mas[mas.length - 1]
            return resolve(lastMas)
        }, 3000))
    } else {

        reject("masive includs Null")

    }
}

const q = await masiv([1, null, 10, 30, 0, 5])