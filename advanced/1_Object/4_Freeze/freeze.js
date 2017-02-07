obj  = {x: 1, y: 10}
var o = Object.freeze(obj)

obj.z =10 // silently does nothing
console.log(obj) 
Object.defineProperty(obj, 'x', { value: 17 }) // throws a TypeError