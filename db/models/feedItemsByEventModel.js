const db = require('../');

var Event = db.Model.extend({
  tableName: 'events',
  feedItems: function() {
    return this.hasMany('FeedItem');
  }
});

var FeedItem = db.Model.extend({
  tableName: 'feed_items',
  event: function() {
    return this.belongsTo('Event');
  }
});

module.exports.FeedItem = db.model('FeedItem', FeedItem);
module.exports.Event = db.model('Event', Event);