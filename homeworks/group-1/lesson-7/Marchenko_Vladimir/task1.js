function newProm (num) {
 return new Promise((resolve, reject) => num >= 10 ? resolve() : reject ());
};

const numResult = +prompt('please write number');
newProm(numResult).then(() => console.log('operation succeful')).catch(() => console.log("operation error"));
