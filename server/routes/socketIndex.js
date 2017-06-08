const socket = require('../index');
const io = socket.io;

io.on('connection', function(client) {
  client.on('room', function(event) {
    client.join(event);
    io.to(event).emit('roomResponse', 'You are in room: ' + event);

    // client.on('comment', function(post) {
    //   socketController.comments.addComment(post, room, client);
    // });
  });
});
