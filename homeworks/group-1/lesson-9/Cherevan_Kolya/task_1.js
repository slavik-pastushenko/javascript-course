// Solution 1
const regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])$/;

const IP = '233.15.34.222';

function checkIP(IP, regex) {
    const newArr = IP.replace(/\./g, ',').split(',');
    const testArr = [];
    let count = 0;
    newArr.map(item => {
        count++;
        if (!regex.test(item)) {
            testArr.push(item)
        }
    })
    return (((testArr.length) <= 0) && count === 4) ? `done ${IP}` : `incorrect IP`
}
console.log(checkIP(IP, regex))

// solution 2
const regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])\.([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])\.([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])\.([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])$/;

const IP = '233.15.34.253';

function checkIP(IP, regex) {
    return regex.test(IP) ? 'ok good IP' : 'not done'
}
console.log(checkIP(IP, regex))
