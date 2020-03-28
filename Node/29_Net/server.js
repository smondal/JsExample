const net = require('net');

const server = net.createServer((c) => {
  console.log("Client connected");
  c.on('end', () => {
    console.log("Client disconnected");
  })
  c.write("hello\r\n");
  // c.pipe(c);
})

server.listen(8124, () =>{
  console.log("server bound");
})
