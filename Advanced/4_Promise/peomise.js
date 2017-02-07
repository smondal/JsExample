var promiseToClean = new Promise(function(resolve, reject){

	let clean=false;

	if(clean){
		resolve("success");
	}else{
		reject("fails");
	}
})

promiseToClean.then(function(resolve){
	console.log("this function is: " + resolve);
}).catch(function(reject){
	console.log("the function is: " +reject )
})