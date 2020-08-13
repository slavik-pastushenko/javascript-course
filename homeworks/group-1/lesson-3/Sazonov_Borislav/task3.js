let numb1 = prompt();
let numb2 = prompt();

let numGenerated = (par1, par2) => {
 if (((par1 && par2) !== null) && ((par1 && par2) !== "")) {
 switch (true) {
 case ((par1 % 2 === 0 && par2 % 2 === 0)):
     return par1 * par2
case ((par1 % 2 !== 0 && par2 % 2 !== 0)):
    return Number(par1) + Number(par2)
case (par2 % 2 !== 0):
     return par2}
}
return 'введено неверные значения';
}

alert(numGenerated(numb1, numb2));