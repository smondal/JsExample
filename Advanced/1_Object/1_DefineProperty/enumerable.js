var obj = Object.defineProperty({}, 'x', { enumerable : false, value:10} )

//If I want to search keys for obj it will return nothing because of property x is enumerable false
Object.keys(obj) //it will return [] array

obj.z =10

Object.keys(obj) // ["z"]
// Now Object.keys will return [z]
