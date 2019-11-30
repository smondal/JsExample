//spawns a shell and runs a command within that shell

var child_process = require('child_process')
//Execute ls command
child_process.exec("ls -l", (err, stdout, stderr) => {
  if(err){
    console.log(err)
  }
  console.log(stdout);
})


//execute commander command
child_process.exec("node ./commander/index.js --help", (err, stdout, stderr) => {
  if(err){
    console.log(err)
  }
  console.log(stdout);
})
