const socket = require('../index');
const io = socket.io;
const models = require('../../db/models');
const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Feed;

module.exports.onConnect = (client, io) => {

  client.on('event', function(event) {    
    console.log('EVENT FROM ON CONNECT IN SERVER', event)
    client.join(event);
    // io.to(event).emit('joinEventReponse', 'You are in event: ' + event);
    client.emit('joinEventResponse', 'You are in event: ' + event);
  });

  client.emit('test!');
  io.emit('test!');
  client.on('test2server', ()=> console.log('we got to the server'))

  client.on('disconnect', () => {
    console.log('user disconnected')
  });

  client.on('newFeedItem', (post) => {
    console.log('THE NEW FEED ITEM', post)
    //models.Feed.postItem(post);

    io.emit('newFeedItemFromServer', post);
  })

  // client.on('new post', post => {
  //   io.emit('post', post);
  // });

};


