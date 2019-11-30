var path = require('path')
console.log(path.resolve(__filename, "dirname/a/a/b"))

//  Here is the output /Users/smondal/sandip/work/node/path/dirname.js/dirname/a/a/b

console.log(path.resolve(__dirname, "dirname/a/a/b"))
// Here is the output /Users/smondal/sandip/work/node/path/dirname/a/a/b


console.log(path.dirname(__dirname))
//Here is the output  /Users/smondal/sandip/work/node
