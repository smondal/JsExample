var child_process = require('child_process')
var child = child_process.fork('child_process/exec.js')

child.on('data', (data) => {
  console.log(`${data}`)
})
