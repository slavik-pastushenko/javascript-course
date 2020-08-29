const masiv = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let number = masiv.map(num => num.filter(enterFour => enterFour === 4)  )
console.log(...number[1])


