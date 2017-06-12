module.exports = (feedItems) => {
  
  let items = [];
  let post = {}

  feedItems.forEach(item => {
    post = {
      feedItemId: item.id,
      userId: item.user_id,
      text: item.text,
      url: item.url,
      credibility: item.credibility,
      type: item.type,
      feedId: item.feed_id
    }
    items.push(post);
  });

  return items; 
}


// module.exports = (feedItems) => {
  
//   let post = {};

//   feedItems.forEach(item => {
//     post[item.id] = {
//       userId: item.user_id,
//       text: item.text,
//       url: item.url,
//       credibility: item.credibility
//     }
//   });

//   return post; 
// }

