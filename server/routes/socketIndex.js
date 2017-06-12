const socket = require('../index');
const io = socket.io;
<<<<<<< HEAD
const models = require('../../db/models');
const express = require('express');
const formatFeedItems = require('../../db/lib/formatFeedItem');
const formatFeed = require('../../db/lib/formatFeed');
=======
const controllers = require('../controllers');
>>>>>>> (feat) call controller

module.exports.onConnect = (client, io) => {

<<<<<<< HEAD
  client.on('event', function(event) {    
    client.join(event);
=======
  client.on('event', function(event) {

    client.join(event);
<<<<<<< HEAD

    models.Feed.getFeedByEventId(event, (err, feedItems) => {
      if (err) {
        console.error(err);
      } else {
        const feeds = formatFeed(feedItems);
        const feed_items = formatFeedItems(feedItems);
        io.emit('fetchFeedItems', {feeds, feed_items});
      }
    });
    // io.to(event).emit('joinEventReponse', 'You are in event: ' + event);
>>>>>>> (feaT) emit new pin data to server
    client.emit('joinEventResponse', 'You are in event: ' + event);
=======
    io.to(event).emit('joinEventReponse', 'You are in event: ' + event);

    client.on('newPin', pin => {
      constrollers.Maps.postPin(client, io, room, pin);
    });
>>>>>>> (feat) call controller
  });

  client.on('disconnect', () => {
    console.log('user disconnected');
  });

  client.on('newFeedItem', (post) => {
<<<<<<< HEAD
    models.Feed.postItem(post, (err, insertedPost) => {

      if (err) {
        console.error(err);
      } else {

        client.emit('postedFeedItemId', insertedPost[0].id);
        client.emit('newFeedItemFromServer', insertedPost[0]);
      }
    });

=======
    models.Feed.postItem(post, (err, id) => {
        if (err) {
          console.error(err);
        } else {
          client.emit('postedFeedItemId', id);
        }
      });
    io.emit('newFeedItemFromServer', post);
>>>>>>> (feaT) emit new pin data to server
  });
  // client.on('new post', post => {
  //   io.emit('post', post);
  // });



};


