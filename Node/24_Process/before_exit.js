// The beforeExit event is emitted when nodejs empties its event loops

let {fork} = require('child_process');
process.on('beforeExit', (code) => {
  console.log('process beforexit event with code', code)
});

process.on('exit', (code) => {
  console.log('process exit event with code', code)
})

console.log('this message is displayed first');

let ch = fork('node/process/chdir.js')

ch.on('data', (data) => {
  console.log(`${data}`)
})
