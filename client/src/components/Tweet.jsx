import React from 'react';
import TwitterFeed from './TwitterFeed.jsx';
import { Twit, ItemUserName, Tweeter } from './StyledComponents.jsx';

class Tweet extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Twit>
        <span style={{marginBottom: '10px'}}> <strong>{this.props.username}</strong>
        <br/>
        {this.props.tweet}
        <br/>
        at {this.props.time} </span>
        <br/><br/>
      </Twit>
    )
  }

}

export default Tweet;
