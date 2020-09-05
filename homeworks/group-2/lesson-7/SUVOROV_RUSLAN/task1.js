const moreThenTen = num => {
    return new Promise((resolve, reject) => {
        num > 10 ?
            resolve("Execute"):
            reject("Fail")
    });
}
moreThenTen(11).then(message => console.log(message)).catch(error => console.log(error));
moreThenTen(1).then(message => console.log(message)).catch(error => console.log(error));
