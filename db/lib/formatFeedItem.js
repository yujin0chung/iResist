module.exports = (feedItems) => {
  
  let items = [];
  let post = {};

  feedItems.forEach(item => {
    post = {
      itemId: item.id,
      eventId: item.event_id,
      type: item.type,
      text: item.text,
      url: item.url,
      userId: item.user_id,
      username: item.username,
      credibility: item.credibility,
      time: item.time
    };
    items.push(post);
  });

  return items; 
};



