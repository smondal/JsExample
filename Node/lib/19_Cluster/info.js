var cluster = require('cluster');
var http = require('http');

var numCpus = require('os').cpus().length;

if(cluster.isMaster){
  console.log(`Master ${process.pid} is running`);

  for(i=0; i< numCpus; i++){
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  })
}else{
  http.createServer((req, res) =>{
    res.writeHead(200);
    res.end('hello world');
  }).listen(8000)

  console.log(`Worker ${process.pid} started`);
}
