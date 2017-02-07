var peopleProto = function(){}

peopleProto.prototype.age = 0;
peopleProto.prototype.name = ""
peopleProto.prototype.city = ""

peopleProto.prototype.printName = function(){
	console.log("the person mane is " + this.name + "," + this.age)
}

var person = new peopleProto();
person.name ="sandip";
person.age =30;
person.state ="Wb"