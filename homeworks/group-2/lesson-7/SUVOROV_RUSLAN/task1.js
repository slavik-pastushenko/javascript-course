const moreThenTen = num => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve(">10");
        } else {
            reject("<10");
        }
    });
}
