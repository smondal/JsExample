obj = {"x" : 2}
obj2 = {"y" :3}
Object.setPrototypeOf(obj, obj2) //Here obj inherit all the property of obj2
console.dir(obj)
