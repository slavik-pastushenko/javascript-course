let number = 1000;
let totalIterations = 0;
while(number > 50){
    number /= 2;
    totalIterations++;
}
console.log(`получилось число - ${number}. всего итераций - ${totalIterations}`);