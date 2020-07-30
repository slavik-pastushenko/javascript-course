function parseToString(number) {
    if (typeof number !== 'number') {
        return 'You enter not a number';
    }
    return  String(number);
}
let result = parseToString('gfg');

console.log(result);