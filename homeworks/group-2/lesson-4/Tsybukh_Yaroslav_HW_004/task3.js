let arr = [1, 2, 3, 4, 5]
    result = arr.map(car => {
        if(car == 1){
            return(`${arr[0]} Машина`)
        }else if (car == 2){
            return (`${arr[1]} Машины`)
        }else if (car == 3){
            return (`${arr[2]} Машины`)
        }else if (car == 4){
            return (`${arr[3]} Машины`)
        }else{
            return (`${arr[4]} Машин`)
        }
    })
    console.log(result)