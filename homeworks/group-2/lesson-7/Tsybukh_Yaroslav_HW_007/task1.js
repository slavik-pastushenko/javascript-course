const promise = new Promise(function(resolve,reject){
    let num = 11
        if(num > 10){
            resolve(num)
        }else{
            reject(new Error("Не удалось .. "))
        }
    })
promise.then(function(res){console.log(res)}).catch(function(err){console.log(err)})