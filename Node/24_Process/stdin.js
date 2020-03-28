process.stdout.write("Type Anything");
process.stdin.on('data', function(message){
  process.stdout.write(`data is ${message}`);
})
