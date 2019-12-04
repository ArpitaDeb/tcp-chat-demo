net = require('net')

const clients = []

const broadcast = (message, sender) => {
  clients.forEach(client => {
    // Don't want to send it to sender
    if (client === sender) return
    client.write(message)
  })
  // Log it to the server output too
  console.log(message)
}

// Start a TCP Server
net.createServer(socket => {
  socket.write(`Hello! Welcome to the chatroom! Please enter your username: \n`)

  socket.on('data', message => {
    if (socket.name) {
      broadcast(`${socket.name} > ${message}`, socket)
    } else {
      // Identify this client
      socket.name = String(message).trim()

      // Put this new client in the list
      clients.push(socket)

      // Send a nice welcome message and announce
      socket.write(`
        Welcome ${socket.name}! You're person #${clients.length} in this chat.
        
        To send a message, type it out and press enter.
      
      `)

      broadcast(`${socket.name} joined the chat\n`, socket)
    }
  }) 

  socket.on('end', () => {
    clients.splice(clients.indexOf(socket), 1)
    broadcast(socket.name + " left the chat.\n")

    clients.forEach(client => console.log(client.name))
  })
}).listen(1234)

// to use: run `nc 172.46.3.160 1234` OR YOUR IP ADDRESS