//Дан массив с элементами `1, 2, 3, 4, 5`. 
//С помощью метода map верните новый массив, 
//где к каждому элементу массива добавляете слово 
//"машина/машины/машин": «['1 машина', '2 машины', ..., '5 машин'».

const newArr = [1, 2, 3, 4, 5];

let resultArr = newArr.map((value) => {
    if (value === 1) {
        return value + ' машина'
    }if (value === 5) {
        return value + ' машин'
    } else {
        return value + ' машины'
    }
}) 
console.log(resultArr)