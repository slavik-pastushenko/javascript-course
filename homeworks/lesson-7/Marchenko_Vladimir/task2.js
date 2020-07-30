function arrayPromise (arr) {
	return new Promise((resolve, reject) => arr.some(elem => elem === null) === true ? 
		setTimeout(() => reject(), 3000) : 
		setTimeout(() => resolve(), 3000))
}

const arr2 = [1, 2, null, 3, 2];

arrayPromise(arr2).then(() => console.log('нету null')).catch(() => console.log('есть null'));

// solution 2

async function arrayPromise2 (arr3) {
	let arrPromises = new Promise((resolve, reject) => arr3.some(elem => elem === null) === false ? 
		setTimeout(() => resolve('array dont have null'), 1000) : 
		setTimeout(() => reject('null in array'), 1000)); 
	let awwPromise = await arrPromises;
	return awwPromise
}



const arr4 = [1, 2, null, 3, 2];
arrayPromise2(arr4);

// при этом, я не понял почему не работает async/await , что то я не догоняю) 
