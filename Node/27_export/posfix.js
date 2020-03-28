argv = process.argv.slice(2)

function hello(){
  return "I am hello"
}

function world(){
  return "I am world"
}

console.log(argv > 10 )
module.exports = argv > 10 ? hello : world
module.exports.hello = hello
module.exports.world = world
