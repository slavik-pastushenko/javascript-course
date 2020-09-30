const checkPass = pass => new RegExp(/([a-z-A-Z-0-9\s-!"#$%&'()*+,./:;<=>?@[\]^_`{\\|}])/ , 'g').test(pass);

console.log(checkPass('255.10.12.254'));