const arr =[12, 15, 20, 25, 79];
function get(numbers){
    let total = 0
numbers.forEach(num => total += num);
return total / numbers.length
}

console.log(get(arr))
