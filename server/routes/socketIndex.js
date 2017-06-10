const socket = require('../index');
const io = socket.io;

module.exports.onConnect = (client, io) => {
  client.on('room', function(event) {
    client.join(event);
    io.to(event).emit('roomResponse', 'You are in room: ' + event);
  });

  // client.on('leave room', room => {
  //   client.leave(room);
  // });

  client.on('new post', post => {
    io.emit('post', post);
  });

};


