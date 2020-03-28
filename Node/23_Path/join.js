var path = require('path')
console.log(path.join(__filename, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname.js/dirname/a/a/b

console.log(path.join(__dirname, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname/a/a/b

console.log(path.join(__dirname, "/dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname/a/a/b


console.log(path.join(__dirname))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path

console.log(path.join("dirname/a/a/b"))
//dirname/a/a/b
