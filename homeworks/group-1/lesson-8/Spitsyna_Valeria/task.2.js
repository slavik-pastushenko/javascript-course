
// задание 2


const sec = new Date();
function Moment(date){
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();}

console.log(Moment(sec));


