// задание 1


function oneDate(date) {
    const Week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return Week[date.getDay()];
}
let date = new Date(2020, 0, 7);
console.log(oneDate(date));


