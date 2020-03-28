var path = require('path')
console.log(path.resolve(__filename, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname.js/dirname/a/a/b

console.log(path.resolve(__dirname, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname/a/a/b

console.log(path.resolve(__dirname, "/dirname/a/a/b"))
///dirname/a/a/b


console.log(path.resolve(__dirname))
//Here is the output  /Users/smondal/sandip/work/node

console.log(path.resolve("dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname/a/a/b
