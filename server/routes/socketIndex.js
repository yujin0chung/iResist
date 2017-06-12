const socket = require('../index');
const io = socket.io;
const models = require('../../db/models');
const express = require('express');
const formatFeedItems = require('../../db/lib/formatFeedItem');
const formatFeed = require('../../db/lib/formatFeed');

module.exports.onConnect = (client, io) => {

  client.on('event', function(event) {    

    client.join(event);

    models.Feed.getFeedByEventId(event, (err, feedItems) => {
      if (err) {
        console.error(err);
      } else {
        const feeds = formatFeed(feedItems);
        const feed_items = formatFeedItems(feedItems);
        io.emit('fetchFeedItems', {feeds, feed_items})
      }
    });
    // io.to(event).emit('joinEventReponse', 'You are in event: ' + event);
    client.emit('joinEventResponse', 'You are in event: ' + event);
  });

  client.on('disconnect', () => {
    console.log('user disconnected')
  });

  client.on('newFeedItem', (post) => {
      models.Feed.postItem(post, (err, id) => {
        if (err) {
          console.error(err);
        } else {
          client.emit('postedFeedItemId', id);
        }
      });
    io.emit('newFeedItemFromServer', post);
  });
};


