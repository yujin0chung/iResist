import React from 'react';
import TwitterFeed from './TwitterFeed.jsx';
import { Twit, TwitDate, ItemUserName, Tweeter } from './StyledComponents.jsx';

class Tweet extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Twit>
        <ItemUserName>{this.props.username}</ItemUserName>
        <div>{this.props.tweet}</div>
        <TwitDate>{this.props.time} </TwitDate>
      </Twit>
    )
  }

}

export default Tweet;
