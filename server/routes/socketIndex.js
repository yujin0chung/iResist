const socket = require('../index');
const io = socket.io;

module.exports.onConnect = (client, io) => {
  client.on('room', function(room) {
    client.join(room);
    io.to(room).emit('roomResponse', 'You are in room: ' + room);
  });

  // client.on('leave room', room => {
  //   client.leave(room);
  // });

  client.on('new post', post => {
    io.emit('post', post);
  });

};


