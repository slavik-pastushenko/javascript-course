
// solutoin1
const mass = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

console.log(mass[1][0])

// solution2

const mass = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const result = mass.map(item=> item.filter(findFour=> findFour === 4 ))
console.log(...result[1])