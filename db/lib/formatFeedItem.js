module.exports = (feedItems) => {
  
  let post = {};

  feedItems.forEach(item => {
    post[item.id] = {
      userId: item.user_id,
      text: item.text,
      url: item.url,
      credibility: item.credibility
    }
  });

  return post; 
}

