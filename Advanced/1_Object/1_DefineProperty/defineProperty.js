obj = {x: 1, y:2};
Object.defineProperty(obj, 'z', {
    configurable: true,
    enumerable: true,
    value: 100,
    writable: false  
  })
obj.x =10 // Here value of x is changed
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));

//I am try to update the z value but it will not update because writable property foe z is false
obj.z = 166
console.log(Object.getOwnPropertyDescriptor(obj, 'z'))	