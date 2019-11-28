const { fork } = require('child_process');

var child = fork('exec.js')

child.on('data', (data) => {
  console.log(`${data}`)
})
