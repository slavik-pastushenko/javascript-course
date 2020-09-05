const mas1 = [1, 2, null, 3, 2];
const mas2 = [1, '2', 3, 132, 5];

//First realization
function notNull (arr) {
   return  new Promise((resolve, reject) => arr.some(num => num === null) !== true ? 
    setTimeout(() => resolve(arr.pop()), 3000) : 
    reject('There is Null in the array'));
};
notNull(mas1).then(elem => console.log(elem)).catch(nul => console.log(nul));
notNull(mas2).then(elem => console.log(elem)).catch(nul => console.log(nul));

//Second realization
async function noOneNull (mas) {
	let res = new Promise((resolve, reject) => mas.some(n => n === null) === false ? 
		setTimeout(() => resolve(mas.pop()), 3000) : 
		reject('There is Null in the array')); 
    const result = await res
        return result;
};
console.log(noOneNull(mas1));