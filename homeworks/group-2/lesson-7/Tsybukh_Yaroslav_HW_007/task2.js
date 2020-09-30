const arr = [1,null,2,3]
function promise(){
    return new Promise(function(resolve,reject){
        arr.forEach(elem => {
            if(elem == null){
                reject(new Error("Ошибка!"))
            }else{
                setTimeout(() => {resolve(arr.pop())},3000)
            }
        })
    })
}
promise().then(function(res){console.log(res)}).catch(function(err){console.log(err)})


///Второй вариант

async function main(){
    try{
        let result = await promise([1,2,null,7]);
            console.log(result)
            function promise(arr){
                return new Promise (function(resolve,reject){
                for(elem of arr){
                    if(elem != null){
                        setTimeout(() =>{resolve(arr.pop())},3000)
                    }else{
                        reject(new Error("Здесь ошибка..."))
                    }
                }
              })
            }
        }
        catch(err){
            console.log(err)
        }
    }
main()
