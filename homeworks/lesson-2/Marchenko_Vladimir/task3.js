let count = prompt('введи число');
count = Number(count);
let prr = count == 0 || count == 2 ? count + 7 : count / 10;
alert(prr);