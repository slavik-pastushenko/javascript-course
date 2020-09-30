const validate = text => new RegExp(/^([a-zA-Z0-9-\s-!"#$%&'()*+,-.\/:;<=>?@[\^_`{|}\]]){0,32}$/, 'g').test(text)
    
console.log(validate("hfcgcg#$#%{{{[[[[]]]"))