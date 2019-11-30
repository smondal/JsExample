var child_process = require('child_process')
//Execute ls command see the different with exec. it spawns the command directly without first spawning a shell 
child_process.execFile('ls', ['-l'], (err, stdout, stderr) => {
  if(err){
    console.log(err)
  }
  console.log(stdout);
})
