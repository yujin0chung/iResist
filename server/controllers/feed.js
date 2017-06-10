const models = require('../../db/models');
//const formatFeed = require('../../db/lib/formatFeed');

module.exports.getEventFeed = (req, res) => {
  models.Feed.getFeedByEventId(req.query.eventId, (err, feed) => {
    console.log('GET EVENT FEED REQ.QUERY.EVENTid', req.query.eventId)
    if (err) {
      console.log('ERROR FROM GET EVENT FEED SERVER ERROR', err);
      res.send(500, err);
    } else {
      res.send(200, feed);
    }
  });
}

