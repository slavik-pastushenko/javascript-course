const num = +prompt();

//first

function generateString(param) {
    if (param === +param) return `${param}`
    return "it's not a number"
}

//second

const anotherGenerate = (param) => isNaN(param - 1)
    ? "it's not a number"
    : param.toString();

//third

const thirdChecked = (param) => ((typeof param === "number")
    ? String(param)
    : "it's not a number");


console.log(generateString(num), anotherGenerate(num), thirdChecked(num))
