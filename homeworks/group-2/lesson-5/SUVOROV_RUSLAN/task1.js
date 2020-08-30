let thousand = 1000,
    totalIterations = 0;
while(thousand > 50){
    thousand /= 2;
    totalIterations++;
}
console.log(`Result = ${thousand}, totalIterations = ${totalIterations}`);
