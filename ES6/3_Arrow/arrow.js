// Arrow function single line no need return statement

/* First example */

let add = (a,b) => a+b
console.log(add(1,3))


/* Second examples */
let numbers = [1,2,3,4,5]
let doubles = numbers.map((n) =>  n*2);

console.log(doubles)

/* Third Example  First example arrow function work 
But Second function arrow function not work properly*/
var Person = {
	name: "sandip",
	sayHello: function(){
		console.log(`I am ${this.name}`)
	}
}

Person.sayHello(); //It will give the output : I am Sandip


var Person = {
	name: "sandip",
	sayHello: () => {
		console.log(`I am ${this.name}`)
	}
}

Person.sayHello() //"TypeError: Cannot read property 'name' of undefined, 