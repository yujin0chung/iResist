import React from 'react';
import Timestamp from 'react-timestamp';

const FeedItem = ({username, text, time}) => (

  <div>
    <b>{username}</b> : <span>{text}</span> <span>Posted <Timestamp time={time} format='time'  utc={true}/></span>
  </div>
);

export default FeedItem;
