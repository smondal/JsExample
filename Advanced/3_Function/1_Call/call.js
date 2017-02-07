add = function(age, name){ 
	var new_age = this.number + age;
	console.log("hey " + name  + " your age is " + new_age);
}

obj = {number: 10};

add.call(obj, 20, "sandip");