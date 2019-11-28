//child_process.exec(): spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.

var {exec} = require('child_process');

var child = exec('ls -l',{cwd: '/Users/smondal/sandip'})

child.stdout.on('data', (data) => {
  console.log(`${data}`)
})
