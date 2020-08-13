function num (chekNum) {
	if (chekNum === Number(chekNum)) {
		const prr = String(chekNum);
		return alert(typeof(prr));
	}
	return alert("Вы ввели не число");
}

let numm = prompt('введите число');
numm = Number(numm);
num(numm);
