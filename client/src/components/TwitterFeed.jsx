import React from 'react';
import axios from 'axios';
import Tweet from './Tweet.jsx';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.getTweets = this.getTweets.bind(this);
  }

  componentWillMount () {
    this.getTweets();
  }

  getTweets(){
    this.setState({
      tweets: []
    })
    axios
      .get("/getTweet", {
        params: {
          searchTerm: this.props.events.allEvents[this.props.events.activeEvent].name,
        }
      })
      .then(response => {
        var tweetsObj = {};
        var tweetArray = [];
        for(var i = 0; i < response.data.length; i++){
          var year;
          tweetsObj.username = response.data[i].user.screen_name;
          tweetsObj.tweet = response.data[i].text;
          year = response.data[i].created_at.split("").slice(26, 30).join("");
          tweetsObj.time = response.data[i].created_at.split("").slice(0, 16).join("") + " " + year;
          tweetArray.push(tweetsObj);
          tweetsObj = {};
        }
        this.setState({
          tweets: tweetArray
        })
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }
  render() {
    console.log('this is the search term: ', this.props.events.allEvents[this.props.events.activeEvent].name);
    return(
      <div>
        <h3> Most Recent Tweets </h3>
        {
          this.state.tweets.map(tweets =>
            <Tweet
              username={tweets.username}
              tweet={tweets.tweet}
              time={tweets.time}
            />
          )
        }
        <button onClick={this.getTweets}>Get More Tweets!</button>
      </div>
    )
  }
}

export default TwitterFeed;
