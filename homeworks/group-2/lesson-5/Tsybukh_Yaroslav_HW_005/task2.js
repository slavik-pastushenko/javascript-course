let arr = [4, 2, 5, 19, 13, 0, 10]
sum = 0
    for (i = 0 ; i<arr.length ; i++){
        sum += arr[i] * arr[i] * arr[i]
        result = Math.sqrt(sum)
    }
    console.log(result)