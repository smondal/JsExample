//this will create custom event and display the results

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=> {
  console.log("An event is fired")
})

myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
