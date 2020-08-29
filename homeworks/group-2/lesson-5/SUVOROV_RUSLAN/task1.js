let thousand = 1000;
let totalIterations = 0;
while(thousand > 50){
    thousand /= 2;
    totalIterations++;
}
console.log(`Resoult = ${thousand}, totalIterations = ${totalIterations}`);
