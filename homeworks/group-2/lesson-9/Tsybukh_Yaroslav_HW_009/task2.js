function checkPassword(num){
let regexp  = /^([A-Za-z0-9\s!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@\[\\\]\^_`\{\|\}]){0,32}$/.test(num)
    return regexp
}
console.log(checkPassword('qwertyuiopasdfghjkl;123456789AS!'))