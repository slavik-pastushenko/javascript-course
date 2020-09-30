let numbers = [1, 2, 5, 9, 4, 13, 4, 10];
const search = (mas, sought) => {
    for(i=0;i<=mas.length;i++) {
        if (mas[i]===sought) {
            console.log('There is !');
            break;
        }
    }
};
search(numbers,4)