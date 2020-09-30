'use strict';

// 1
const arr1 = [1, 2, 3, 4, 5, null];
const arr2 = [1, 2, 3, 4, 5];

const checkArray = arr => new Promise((resolve, reject) => { 
  arr.includes(null) ? reject('Array has null') : setTimeout(() =>  resolve(arr[arr.length - 1]), 3000);
});

checkArray(arr1).then(item => console.log(item)).catch(msg => console.log(msg));
checkArray(arr2).then(item => console.log(item)).catch(msg => console.log(msg));

// 2

const checkArray2 = async (arr) => {
  return arr.includes(null) ? Promise.reject('Array has null') : new Promise(resolve => setTimeout(resolve(arr[arr.length - 1]), 3000));
};

checkArray2(arr1).then(item => console.log(item)).catch(msg => console.log(msg));
checkArray2(arr2).then(item => console.log(item)).catch(msg => console.log(msg));







