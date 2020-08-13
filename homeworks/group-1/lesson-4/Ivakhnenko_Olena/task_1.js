function filterStringBySymbols(array, numberSymbols) {
    return array.filter((value) => {
        if (typeof value !== "string") value = String(value);

        return value.length > numberSymbols ? value: false;
    })
}

const arrayString = ['old', 'new', 'modern', 'fashion', 'string'];

console.log(filterStringBySymbols(arrayString, '5'));

