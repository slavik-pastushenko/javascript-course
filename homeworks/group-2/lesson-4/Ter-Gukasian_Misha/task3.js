const arr =[1, 2, 3, 4, 5];
let car = arr.map((function(num){
    if (num === 1) return `${num } машина`;
if (num  === 5) return `${num } машин`;
if (num  > 1 && num  < 5) return `${num } машины`
}))
console.log(car);