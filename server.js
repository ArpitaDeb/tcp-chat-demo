// Load the TCP Library
net = require('net')

const clients = []

// Start a TCP Server
net.createServer(socket => {
  // Send a message to all clients
  const broadcast = (message, sender) => {
    clients.forEach(client => {
      // Don't want to send it to sender
      if (client === sender) return
      client.write(message)
    })
    // Log it to the server output too
    console.log(message)
  }
  
  socket.write(`Hello! What's your name?\n`)

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    if (socket.name) {
      broadcast(`${socket.name} > ${data}`, socket)
    } else {
      // Identify this client
      socket.name = String(data).trim()

      // Put this new client in the list
      clients.push(socket)

      // Send a nice welcome message and announce
      socket.write(`
        Welcome, ${socket.name}! You're person #${clients.length} in this chat.
        
        To send a message, type it out and press enter.
      \n`)

      broadcast(`${socket.name} joined the chat\n`, socket)
    }
  })

   // Remove the client from the list when it leaves
   socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1)
    // broadcast(socket.name + " left the chat.\n")
  })
}).listen(1234)

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 1234\n")
