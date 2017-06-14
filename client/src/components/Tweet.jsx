import React from 'react';
import TwitterFeed from './TwitterFeed.jsx';

class Tweet extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <span> <strong>{this.props.username}</strong>
      <br/>
      {this.props.tweet}
      <br/>
      at {this.props.time} </span>
      <br/><br/>
      </div>
    )
  }

}

export default Tweet;
