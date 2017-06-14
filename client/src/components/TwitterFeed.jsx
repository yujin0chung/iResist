import React from 'react';
import axios from 'axios';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.getTweets = this.getTweets.bind(this);
  }

  getTweets(){
    axios
    .get("/getTweet")
    .then(response => {
      console.log('this is the response: ', response)
      // this.setState({
      //   tweet: response.data
      // });
      console.log('this is the tweet.state ', this.state.tweet)
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
  }
  render() {
    return(
      <div>
        <p>{this.state.tweet}</p>
        <button onClick={this.getTweets}>Get Tweets!</button>
      </div>
    )
  }
}

export default TwitterFeed;
