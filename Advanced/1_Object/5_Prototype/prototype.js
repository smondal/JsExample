function Car(model, engine){
	this.model = model
	this.engine = engine
}


var hazback = new Car("i20", "Hundai");

Car.prototype.speed = function(){
	return "22";
}

hazback.speed()

var sidan = new Car("celeo", "Maruti");

sidan.__proto__.color = "blue"
