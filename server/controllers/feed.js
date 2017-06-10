const models = require('../../db/models');
const formatFeedItems = require('../../db/lib/formatFeedItem');
const formatFeed = require('../../db/lib/formatFeed');

module.exports.getAllFeed = (req, res) => {
  models.Feed.allFeeds((err, feed) => {
    if (err) {
      res.send(500, err);
    } else {
        console.log('FEED FROM GET ALL FEED', feed)
      res.send(200, feed);
    }
  })
}

module.exports.getEventFeed = (req, res) => {
  models.Feed.getFeedByEventId(req.query.eventId, (err, feedItems) => {
    console.log('GET EVENT FEED REQ.QUERY.EVENTid', req.query.eventId)
    if (err) {
      res.send(500, err);
    } else {
      const feeds = formatFeed(feedItems);
      const feed_items = formatFeedItems(feedItems);
      res.send(200, {feeds: feeds, feedItems: feed_items});
    }
  });
}

