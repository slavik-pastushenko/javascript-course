const arrPr = array => {
    return new Promise((resolve, reject) => {
        for(x = 0; x < array.length; x++){
            if(array[x] == null){
                reject();
            }
        }
        resolve(array);
    })
}
const arr1 = [1, "fev", "hello", NaN, 444, 923, "null", "what"];
arrPr(arr1).then((arrayWithLastElem) => {
    setTimeout(() => console.log(arrayWithLastElem[arrayWithLastElem.length - 1]), 3000);
}).catch(() => console.log("Error"));