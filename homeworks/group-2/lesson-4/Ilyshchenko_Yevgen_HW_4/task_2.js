const mas = [1, 2, 5, 4, 7, 13, 7, 10];
// option-1
const givNumberFour = () => {
   
    for (i = 0; i <= mas.length; i++) {
        if (mas[i] === 4) {
            return `Есть!`;          
        } 
    }
}
console.log(givNumberFour())


// option-2
    const mas = [1, 2, 5, 4, 7, 13, 7, 10];
    for (i = 0; i <= mas.length; i++) {
        if (mas[i] === 4) {
            console.log(`Есть!`) ;
            break;
        }
    }


// option-3
if (mas.includes(4)) {
    console.log(`Ура`)   
    } 

