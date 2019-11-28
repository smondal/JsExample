var util = require('util')
var EventEmitter = require('events');

function MyStream(){
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data){
  this.emit('data', data);
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log("Received data:", data);
})

stream.write('It works!');
