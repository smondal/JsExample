var {spawn} = require('child_process');

var child = spawn('ls',['-l'], {cwd: '/Users/smondal/sandip'})

child.stdout.on('data', (data) => {
  console.log(`${data}`)
})
