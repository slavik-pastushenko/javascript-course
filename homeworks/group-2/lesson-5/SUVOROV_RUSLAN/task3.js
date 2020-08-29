const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
for (i=0;i<arr.length;i++) {
    a = arr[i].filter(num => num === 4);
    if (a.length!=0) console.log(...a);
}    
