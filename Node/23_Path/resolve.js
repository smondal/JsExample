var path = require('path');

// var relpath = process.env.PATH.split(path.delimiter);

var relpath = [ "/a/b/c", "c/d", "."]
var files = relpath.map(function(r){
  // console.log(path.resolve(process.cwd(), r));
  return path.resolve(process.cwd(), r);
})
// console.log(files)
console.log(files.slice(1))
