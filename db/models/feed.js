const knex = require('../').knex

module.exports.allFeeds = (cb) => {
  knex.select().from('feed')
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}

module.exports.findFeedById = (eventId, cb) => {
  knex.select().from('feed')
    .where('event_id', eventId)
    .then(data => {
      cb(null, data)
    })
    .catch(e => {
      cb(e, null)
    })
}



module.exports.getFeedByEventId = (eventId, cb) => {
  knex('feed_items').select(['feed_items.feed_id', 'feed_items.id', 'feed_items.text', 'feed_items.url', 'feed_items.credibility', 'feed_items.user_id'])
    .innerJoin('feed', 'feed.id', 'feed_items.feed_id')
    .innerJoin('events', 'events.id', 'feed.event_id')
    .where('events.id', eventId)
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
}




  

  






