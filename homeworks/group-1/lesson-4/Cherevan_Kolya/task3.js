
const newArr = [1, 2, 3, 4, 5];

function checkedCar(param) {
    if (param === 1) {
        return "машина"
    }
    if (param === 5) {
        return "машин"
    } else {
        return "машины"
    }
}

const mappedArr = newArr.map((item, index) => `${index + 1} ${checkedCar(item)}`)
console.log(mappedArr)
