const socket = require('../index');
const io = socket.io;

module.exports.onConnect = (client, io) => {
  client.on('event', function(event) {
    client.join(event);
    io.to(event).emit('joinEventReponse', 'You are in event: ' + event);
  });

  // client.on('leave room', room => {
  //   client.leave(room);
  // });

  client.on('new post', post => {
    io.emit('post', post);
  });

};


