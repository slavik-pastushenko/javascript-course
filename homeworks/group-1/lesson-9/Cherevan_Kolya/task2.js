const pass = prompt();
const regex = /^([a-z-A-Q-0-9-\s-!"#$%&'()*+,-.\/:;<=>?@[\^_`{|}\]]){0,32}$/;
function checkPassword(password) {
    return regex.test(password) ? 'correct password' : 'incorrect'
}

console.log(checkPassword(pass))