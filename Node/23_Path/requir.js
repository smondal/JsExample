
console.log(require.resolve(__filename, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname.js/dirname/a/a/b

console.log(require.resolve(__dirname, "dirname/a/a/b"))
///Users/smondal/sandip/work/node/JsExample/Node/23_Path/dirname/a/a/b

console.log(require.resolve(__dirname, "/dirname/a/a/b"))
///dirname/a/a/b


console.log(require.resolve(__dirname))
//Here is the output  /Users/smondal/sandip/work/node

console.log(require.resolve("dirname/a/a/b"))
