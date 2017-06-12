const socket = require('../index');
const io = socket.io;
const models = require('../../db/models');
const express = require('express');
const formatFeedItems = require('../../db/lib/formatFeedItem');
const formatFeed = require('../../db/lib/formatFeed');
const controllers = require('../controllers');

module.exports.onConnect = (client, io) => {
  client.on('event', function(event) {
    client.join(event);
    client.emit('joinEventResponse', 'You are in event: ' + event);
    io.to(event).emit('joinEventReponse', 'You are in event: ' + event);

    client.on('newPin', pin => {
      controllers.Maps.postPin(client, io, event, pin);
    });
  });

  client.on('disconnect', () => {
    console.log('user disconnected');
  });

  client.on('newFeedItem', (post) => {
    models.Feed.postItem(post, (err, insertedPost) => {

      if (err) {
        console.error(err);
      } else {

        client.emit('postedFeedItemId', insertedPost[0].id);
        client.emit('newFeedItemFromServer', insertedPost[0]);
      }
    });
  });
  // client.on('new post', post => {
  //   io.emit('post', post);
  // });



};


