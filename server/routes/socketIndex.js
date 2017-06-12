const socket = require('../index');
const io = socket.io;
const models = require('../../db/models');
const express = require('express');
const formatFeedItems = require('../../db/lib/formatFeedItem');
const formatFeed = require('../../db/lib/formatFeed');

module.exports.onConnect = (client, io) => {

  client.on('event', function(event) {    

    console.log('EVENT FROM ON CONNECT IN SERVER', event)

    client.join(event);

    models.Feed.getFeedByEventId(event, (err, feedItems) => {
      if (err) {
        console.error(err);
      } else {
        console.log('GETFEED QUERY FEED ITEMS', feedItems);
        const feeds = formatFeed(feedItems);
        const feed_items = formatFeedItems(feedItems);
        console.log('FEED ITEMS FORMATTED FROM SER', feeds)
        console.log('FEED ITEMS FROM FORMATT4D', feed_items)
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
        console.log('RETURNED FEED ITEM ID', id)
        if (err) {
          console.error(err);
        } else {
          client.emit('postedFeedItemId', id);
        }
      });
    io.emit('newFeedItemFromServer', post);
  });

};


