import React from 'react';

const FeedItem = (props) => (

  <div>
    <b>{props.username}</b> : <span>{props.text}</span>
  </div>
);

export default FeedItem;
