/* Async hook provided an api to register callbacks tracking the lifetime of asyncchronous resources created inside nodejs application*/
var async_hook = require('async_hooks');
var http = require('http');
var fs = require('fs')

var eid = async_hook.executionAsyncId();

var tid = async_hook.triggerAsyncId()

var asyncHook = async_hook.createHook({ init, before});

asyncHook.enable();

http.createServer(function(req, res){
  res.end("hello world");
}).listen(3000)


function init(asyncId, type, triggerId){
  // console.log("******start****")
  fs.writeSync(1, `${type}`)
}

function before(asyncId){
  // console.log("*************")
  fs.writeSync(1, `${asyncId}`)
}
