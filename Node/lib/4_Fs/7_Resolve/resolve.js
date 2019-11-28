var path = require('path');
var fs = require('fs');

console.log( fs.readFileSync(path.resolve("text1.txt") ) );
console.log( fs.readFileSync(require.resolve("./text1.txt")))


console.log(path.resolve("text1", "text") );
console.log(require.resolve("text1", "text") );
