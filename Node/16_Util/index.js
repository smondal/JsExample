const EventEmitter = require('events')
const util = require('util')

function MyEvent(){
}

util.inherits(MyEvent, EventEmitter);
myEvent = new MyEvent();

MyEvent.prototype.write = function(data){
  this.emit('data', data)
}

myEvent.on('data', (data) =>{
  console.log(`custom fire, ${data}`);
})

myEvent.write('its working');
myEvent.emit('data')
