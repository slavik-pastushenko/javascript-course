
const checkIP = ip => new RegExp(/^(([01]?\d?\d|25[0-5]|2[0-4]\d)\.){3}([01]?\d\d?|25[0-5]|2[0-4]\d)$/, 'g').test(ip);

console.log(checkIP('255.01.12.183'));