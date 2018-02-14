const express = require('express'); //include this just like a php include
const app = express();
const io = require('socket.io')(); //activate the chat plugin

//serve up static files
app.use(express.static('public'));

//app routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

const server = app.listen(3000, () => {
  console.log('listening on port 3000');
});

io.attach(server);

io.on('connection', socket => { // function(socket) (...)
  console.log('a user has conected!')
  io.emit('chat message', { for : 'everyone', message : `${socket.id} is here`});

  //handle messages sent from the client
  socket.on('chat message', msg => {
    io.emit('chat message', { for : 'everyone', message : msg});
  })

  socket.on('disconnect', () => {
    console.log('a user has disconnected');

    io.emit('disconnect message', `${socket.id} has left the building`);
  });
});
