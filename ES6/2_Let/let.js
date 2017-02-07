//Let is block scope variable


/* Using var */
if(true){
 let name = "sandip"
}
console.log(name) // It will give the output "sandip"


/* Using let */
if(true){
 let name = "sandip"
}
console.log(name) //It will give the oupput "undefine"


/* Using var */
for( var i = 0; i < 10; i++){
	console.log(i);
}

console.log("outside loop" + i); //It will give the output 10 after loop finished


or( var i = 0; i < 10; i++){
	console.log(i);
}

console.log("outside loop" + i);


//
let person = {
	firstName: "Sandip",
	lastName: "Mondal",
	fullName(){
		return `this is ${this.firstName} ${this.lastName}` 
	}
}

full_name = person.fullName();
console.log(full_name);