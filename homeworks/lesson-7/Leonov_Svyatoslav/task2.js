async function arrPr(array) {
    console.log("start");
    try{
        let PromiseWithArray = await new Promise((resolve, reject) => {
            for(x = 0; x < array.length; x++){
                if(array[x] == null){
                    reject("something went wrong");
                }
            }
            resolve(array);
        });
        setTimeout(() => console.log("test"), 4000);
        setTimeout(() => console.log(PromiseWithArray[PromiseWithArray.length - 1]), 3000);
    } catch (e) {
        console.log(`${e}  и это все равно вывело перед "финиш"`);
    }
    console.log("finish");
    setTimeout(() => console.log("test2"), 5000); //думал, что промис будет выполняться тольок после выполнения этой строчки
}
const arr1 = [1, "fev", "hello", NaN, 444, 923, "null", "word after start and finish :)"];
arrPr(arr1);

// const arrPr = array => {
//     return new Promise((resolve, reject) => {
//         for(x = 0; x < array.length; x++){
//             if(array[x] == null){
//                 reject();
//             }
//         }
//         resolve(array);
//     })
// }
// const arr1 = [1, "fev", "hello", NaN, 444, 923, "null", "what"];
// arrPr(arr1).then((arrayWithLastElem) => {
//     setTimeout(() => console.log(arrayWithLastElem[arrayWithLastElem.length - 1]), 3000);
// }).catch(() => console.log("Error")); 
