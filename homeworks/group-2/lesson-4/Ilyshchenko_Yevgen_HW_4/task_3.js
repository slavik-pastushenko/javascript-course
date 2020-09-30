const mas = [1, 2, 3, 4, 5]

// option-1
let c = mas.map(function(item){
    if (item === 1) return `${item} машина`;
if (item === 5) return `${item} машин`;
if (item > 1 && item < 5) return `${item} машины`
})
console.log(c)


// option-2
let d = (item) => {
    if (item === 1) return `машина`;
    if (item === 5) return ` машин`;
    if (item > 1 && item < 5) return `машины`;
}

let x = mas.map((elem, index) => `${index + 1} ${d(elem)}`);
console.log(x)