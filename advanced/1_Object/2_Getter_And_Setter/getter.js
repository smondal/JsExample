var obj = {
	name: "sandip",
	get getName(){  //Here getName is the getter method
		console.log("Name is:" + this.name);
	}
}
obj.getName; 
console.log(Object.getOwnPropertyDescriptor(obj, 'getName'))