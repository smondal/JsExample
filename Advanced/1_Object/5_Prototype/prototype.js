/* When new constructor function is create It create two object 
  1. Name of the function object
  2. Prototype object

  While you create instance of that class. Each instance have __proto__ property which is always 
  point to prototype object of that class

  */

function Car(model, engine){
	this.model = model
	this.engine = engine
}


var swift = new Car("dzire", "ax");

Car.prototype.speed = function(){
	return "22";
}

console.dir(swift) // Here you can see the __proto__ property of that object which is point to Car.prototype

swift.__proto__ === Car.prototype //true

swift.__proto__.door = "4"

console.dir(Car.prototype) //It will give you 4 as well


swift.__proto__.__proto__ === Object.prototype //true


swift.__proto__.__proto_.seat=7 // Here this will create under Object.prototype  

swift.speed() // First it will try to find speed method from own property, If it is not find then go to the parent class using __proto__ chain

var sidan = new Car("celeo", "Maruti");

sidan.__proto__.color = "blue"
