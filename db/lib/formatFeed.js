module.exports = (feedItems) => {
  let formattedFeed = {};
  let feedItemIds = [];

  feedItems.forEach(item => {
    feedItemIds.push(item.id)
  })

  formattedFeed.feed_items = feedItemIds;

  return formattedFeed;

}



