add = function(name, age){ 
	var new_age = this.number + age;
	console.log("hey " + name  + " your age is " + new_age);
}

obj = {number: 10};

added = add.bind(obj);
added("sandip", 30)