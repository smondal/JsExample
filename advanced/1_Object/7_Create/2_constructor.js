var peopleConstructor = function(name, age, state){
	this.name = name;
	this.age = age;
	this.state = state;
	this.printName = function(){
		console.log("The person is " + this.name + "," + this.age );
	}

}

var people = new peopleConstructor("sandip", 30, "Wb");

people.printName();