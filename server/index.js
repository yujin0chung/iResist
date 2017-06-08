'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.PORT || 3000;
const socketRoutes = require('./routes/socketIndex');
const socketAuth = require('./middleware/socketAuth');

const server = app.listen(PORT, () => {
  console.log('Example app listening on port: ', PORT);
});

const io = require('socket.io')(server);

io.use(socketAuth);

io.on('connection', function(client) {
  socketRoutes.onConnect(client, io);
});

module.exports.io = io;
