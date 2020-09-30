'use strict';

const createPromise = num => new Promise((resolve, reject) => {num > 10 ? resolve('Resolved') : reject('Rejected') });

createPromise(11).then(msg => console.log(msg)).catch(msg => console.log(msg));
createPromise(9).then(msg => console.log(msg)).catch(msg => console.log(msg));

