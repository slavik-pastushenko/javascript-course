function PromiseBack(num) {
	return new Promise ((resolve, reject) =>{
		if (num >10) {
		 resolve('ok');
	} else (num <10) { 
		reject('not ok');
		}
		
	})
}
console.log(PromiseBack)
