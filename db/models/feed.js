const knex = require('../').knex;
const models = require('./../../db/models');

<<<<<<< HEAD
module.exports.getFeedByEventId = (eventId, pageNumber, cb) => {
  console.log('PAGE NUMBER FROM QUERY', pageNumber)
    models.FeedItem.where({event_id: eventId})
      .orderBy('id', 'DESC')
      .fetchPage({pageSize: 10, page: pageNumber})
      .then(items => {
        console.log('ITEMS FROM GET FEED BY EVENT QUERY', items.toJSON());
        if (items.toJSON().length)
        cb(null, items.toJSON());
      })
      .catch(error => {
        cb(error, null);
      });
  // knex('feed_items').select(['feed_items.event_id', 'feed_items.id', 'feed_items.text', 'feed_items.type','feed_items.url', 'feed_items.credibility', 'feed_items.user_id', 'feed_items.username', 'feed_items.time'])
  //   .innerJoin('events', 'events.id', 'feed_items.event_id')
  //   .where('events.id', eventId)
  //   // .limit(10)
  //   // .offset(10 * Number(loadCount))
  //   .then(data => {
  //     cb(null, data);
  //   })
  //   .catch(err => {
  //     cb(err, null);
  //   });
=======
module.exports.getFeedByEventId = (eventId, cb) => {
  knex('feed_items').select(['feed_items.event_id', 'feed_items.id', 'feed_items.text', 'feed_items.type', 'feed_items.url', 'feed_items.credibility', 'feed_items.user_id', 'feed_items.username', 'feed_items.time'])
    .innerJoin('events', 'events.id', 'feed_items.event_id')
    .where('events.id', eventId)
    // .limit(10)
    // .offset(10 * Number(loadCount))
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
>>>>>>> (feat) check for feed item vote
};

module.exports.postItem = (item, cb) => {
  knex('feed_items')
    .insert({event_id: Number(item.eventId), text: item.text, url: item.url, credibility: Number(item.credibility), type: item.type, user_id: Number(item.userId), username: item.username, time: item.time})
    .returning('*')
    .then(insertedPost => {
      cb(null, insertedPost);
    })
    .catch(err => {
      cb(err, null);
    });
};
<<<<<<< HEAD
=======

module.exports.checkForFeedItemVote = (vote, cb) => {
  knex('feed_item_credibility')
    .where({
      user_id: vote.userId,
      feed_item_id: vote.itemId
    })
    .select()
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
};
>>>>>>> (feat) check for feed item vote
