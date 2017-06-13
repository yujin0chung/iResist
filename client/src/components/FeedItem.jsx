import React from 'react';
import timeago from 'timeago';

const FeedItem = (props) => (

  <div>
    <b>{props.username}</b> : <span>{props.text}</span>
  </div>
);

export default FeedItem;
