// Дан массив [4, 2, 5, 19, 13, 0, 10]. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь for & Math.


let arr = [4, 2, 5, 19, 13, 0, 10]

let cubeSum = 0;

for (i=0; i < arr.length; i++){
    cubeSum += Math.pow(arr[i], 3)
}

console.log(Math.sqrt(cubeSum))