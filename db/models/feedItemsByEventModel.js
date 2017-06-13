const db = require('../');

var Event = bookshelf.Model.extend({
  tableName: 'events',
  feedItems: function() {
    return this.hasMany(FeedItems);
  }
});

var FeedItems = bookshelf.Model.extend({
  tableName: 'feed_items',
  event: function() {
    return this.belongsTo(Event);
  }
});

module.exports = db.model('FeedItems', FeedItems);
module.exports = db.model('Event', Event);