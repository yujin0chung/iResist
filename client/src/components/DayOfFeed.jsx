import React from 'react';
import { Input } from 'react-bootstrap';
import FeedItem from './FeedItem.jsx';
import UploadMedia from './UploadMedia.jsx';
import TwitterFeed from './TwitterFeed.jsx';
import axios from 'axios';
import _ from 'lodash'
import styled from 'styled-components'

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      url: '',
      credibility: '' || 0,
      type: 'MESSAGE',
      pageNumber: 1,
      feedItemCount: 0,
      posts: [],
      wantMoreItems: false,
      currentView: 'FEED'
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCredChange = this.handleCredChange.bind(this);
    this.twitterFeed = this.twitterFeed.bind(this);
  }

  componentDidMount() {
    this.handleLoadItems(this.state.pageNumber++)
    var self = this;
    this.props.client.on('newFeedItemFromServer', insertedPost => {
      this.props.receiveFeedItem(insertedPost);
      let newState = this.state.posts;
      newState.unshift(insertedPost);
      self.setState({posts: newState});
    });

    this.props.client.on('feedItemVoteNotPermitted', (error) => {
      this.props.receiveFeedItemVoteError(error);
    });
  }

  handleLoadItems(pageNumber) {
    axios.get('/api/feed/event', {
      params: {
        eventId: this.props.events.activeEvent,
        pageNumber
      }
    }).then(feedItems => {
      this.setState({posts: this.state.posts.concat(feedItems.data.feedItems)})
    });
  }

  handlePost(e) {
    e.preventDefault();
    let newPost = {
      eventId: this.props.events.activeEvent,
      type: this.state.type,
      text: this.state.text,
      url: this.state.url,
      userId: this.props.user.userId,
      username: this.props.user.username,
      credibility: this.state.credibility,
      time: Date.now()
    };
    this.props.client.emit('newFeedItem', newPost);
    this.setState({
      text: '',
      url: '',
      type: ''
    });
  }

  handleChange(e) {
    this.setState({text: e.target.value });
  }

  handleCredChange(feedItemVote) {
    this.props.client.emit('voteFeedItem', feedItemVote);
  }

  twitterFeed () {
    this.setState({
      currentView: "TWITTER"
    })
  }

  render() {
    const feedItems = this.props.feeds.feedItems;
    return (
      <div>
        {this.state.currentView === 'FEED' ?
          <div>
          <h3>Post a message</h3>
          <form onSubmit={this.handlePost}>
            <input
              type="textarea"
              placeholder="What's happening at the protest?"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </form>
          <UploadMedia {...this.props}/>
          <button onClick={this.twitterFeed}>Twitter Feed</button>
          {
            this.state.posts.map(item =>
              <FeedItem
                username={item.username}
                text={item.text}
                key={item.id}
                username={item.username}
                text={item.text}
                time={item.time}
                userId={this.props.user.userId}
                itemId={item.id}
                credibility={item.credibility}
                handleCredVote={this.handleCredChange}
                url={item.url}
                type={item.type}
                errorMsg={item.errorMsg}
                client={this.props.client}/>
            )
          }
          {
          feedItems.length < 10 ?
            <div></div> :
            <button onClick={() => this.handleLoadItems(this.state.pageNumber++)}>Load More Posts></button>
          }
        </div>
        :
        <div></div>
        }
        {this.state.currentView === "TWITTER" ?
          <TwitterFeed {...this.props} client={this.client} /> :
          <div></div>
        }
      </div>
    );
  }
}

const Title = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:.2em;
  font-size:2em;
`

const TextInput = styled.input`
  width:100%;
  height: 40px;
  background-color:#F7F7F7;
  border:none;
  padding: 10px;

`;

export default DayOfFeed;
