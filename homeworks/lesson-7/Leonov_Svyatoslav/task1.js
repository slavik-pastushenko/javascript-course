const moreTen = numb => {
    return new Promise((resolve, reject) => {
        if (numb > 10){
            resolve(">10");
        } else {
            reject("<10");
        }
    });
}

console.log(moreTen(11));