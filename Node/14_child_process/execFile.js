var {execFile} = require('child_process');

var child = execFile('ls',{cwd: '/Users/smondal/sandip'})

child.stdout.on('data', (data) => {
  console.log(`${data}`)
})
