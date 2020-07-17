const carArr = [1, 2, 3, 4, 5];

function countCars(param){
    if(param === 1){
        return 'машина';
    }
    if(param === 5){
        return 'машин';
    }else{
        return 'машины';
    }
}
const mappedMass = carArr.map((item, index) => `${index + 1} ${countCars(item)}`);//ЗАДАТЬ ВОПРОС: ПОЧЕМУ ИТЕМ И ИНДЕКС НЕЛЬЗЯ МЕНЯТЬ МЕСТАМИ!???
alert(mappedMass);
