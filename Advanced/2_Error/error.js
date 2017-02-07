//This is a custom error message 

function Add(){
	try{
		a = 1
		console.log("This is console")
		throw new Error("Custom Error Message")
		console.log("This will not execute")
		}
	catch(e) {
  	console.log(Object.getOwnPropertyNames(e))
		console.log("Error is: " + e.name +"," + e.message  + e.stack)
	}
}
Add()