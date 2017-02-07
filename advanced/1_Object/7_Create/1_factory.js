var peopelFactory = function(name, age, state){
	var temp ={
		age: age,
		name : name,
		state: state
	}
	temp.printName = function(){
		console.log("People name is " + temp.name)
	}	

	return temp;
}

people = new peopelFactory("sandip", 30, "WB");
people.printName();