const text = ['a', 'b', 'c', 'd']
const b = text.join('')

const c = b => `${b[0]} + ${b[1]}, ${b[2]} + ${b[3]} `

console.log(c(b))