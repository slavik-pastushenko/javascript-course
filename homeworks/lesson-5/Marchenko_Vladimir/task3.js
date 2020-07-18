const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
function checkArr (four){
    return four === 4;
}
console.log(arr[1].find(checkArr), arr[1].findIndex(checkArr));

// solution 2

console.log(arr[1][0]);

// solution 3

console.log(arr[1].filter(array => array === 4));