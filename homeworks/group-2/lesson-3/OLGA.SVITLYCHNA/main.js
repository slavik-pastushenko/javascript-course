// Создайте функцию, которая принимает число и преобразовывает в строку. Убедитесь, что на вход приходит число. Если не число, верните ответ о том, что передали не число. Знания которые понадобятся: Функции, условные выражения.


let number = 2;
function numberToString(check) {
    if (typeof check == 'number'){
        return check + "!";
    } else {
        return "Try again";
    }
}
console.log(numberToString (number));