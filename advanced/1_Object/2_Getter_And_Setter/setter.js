var obj = {
	name: "sandip",
	get getName(){  //Here getName is the getter method
		console.log("Name is:" + this.name);
	}

	set setName(val){
		this.name = val
		console.log("Name is after setting" + this.name)
	}

}
obj.getName; 
console.log(Object.getOwnPropertyDescriptor(obj, 'getName'))

obj.setName("Rohit")

console.log(Object.getOwnPropertyDescriptor(obj, 'setName'))