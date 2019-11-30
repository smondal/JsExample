const util = require('util')
const EventEmitter = require('events')

function MyEvent(){

}

MyEvent.prototype.write = function(data){
  this.emit('data', data)
}

util.inherits(MyEvent, EventEmitter);

myEvent = new MyEvent();

myEvent.on('data', (data) =>{
  console.log(`custom fire, ${data}`);
})

myEvent.write('its working');
