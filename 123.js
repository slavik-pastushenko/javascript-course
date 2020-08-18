console.log('hi');
/* var numbers = [];
a = +prompt('Сколько всего чисел?: ')
for (var i=0; i<a; i++){
    numbers[i] = +prompt(i+1 + "число: ")
}
var ma = numbers[a-1]
numbers.sort();
console.log(numbers);
for (var i=0; i<a-1; i++){
    for (var j=i+1; j<a; j++){
        if (numbers[i]<numbers[j]){
            console.log(numbers[i] + " < " + numbers[j]);
        } else if (numbers[i]>numbers[j]){
            console.log(numbers[i] + " > " + numbers[j]);
        } else {
            console.log(numbers[i] + " = " + numbers[j]);
        }
    }
    if (ma < numbers[i]){
        ma = numbers[i];
    }
}
if (ma > 0 && ma < 10){
    console.log("0 < " + ma + " < 10 ");
}
    console.log("Наибольшее: " + ma); */
/*var a = +prompt('Время года: ');
switch (a){
    case 1: 
    console.log("Зима");
    break;
    case 2: 
    console.log("Весна");
    break;
    case 3: 
    console.log("Лето");
    break;
    case 4: 
    console.log("Осень");
    break;
}*/
var a = prompt('Число: ');
switch (a){
    case 'ru':
        console.log("Russian")
    case 'en':
        console.log("English")
    case 'ua':
        console.log("UA")
}
