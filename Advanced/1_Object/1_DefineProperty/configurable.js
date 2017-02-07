obj = Object.defineProperty({}, 'x' , {
	configurable: false,
	value : 100
})

obj.x =12; // it will not override the value of x
console.log(obj)

Object.defineProperty(obj, 'x' , {
	configurable: true
})

obj.x =12; // it will not override the value of x
console.log(obj)
