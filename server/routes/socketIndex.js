const socket = require('../index');
const io = socket.io;
const models = require('../../db/models');
const express = require('express');
const controllers = require('../controllers');

module.exports.onConnect = (client, io) => {
  client.on('event', function(event) {

    client.join(event);

    client.emit('joinEventResponse', 'You are in event: ' + event);
    io.to(event).emit('joinEventReponse', 'You are in event: ' + event);

    client.on('newPin', pin => {
      controllers.Maps.postPin(client, io, event, pin);
    });

    client.on('newFeedItem', (post) => {
      controllers.Feed.postFeedItem(client, io, event, post);
    });

    client.on('pinVote', vote => {
      controllers.Maps.votePin(client, io, event, vote);
    });

    client.on('voteFeedItem', vote => {
      controllers.Feed.voteFeedItem(client, io, event, vote);
    });
  });

  client.on('disconnect', () => {
    console.log('user disconnected');
  });


};


