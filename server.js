let net = require('net');

net.createServer(function(s){
  s.on('data', function(data){
    broadcast("> " + data);
  })
  function broadcast(message){
    process.stdout.write(message);
  }
}).listen(1234);