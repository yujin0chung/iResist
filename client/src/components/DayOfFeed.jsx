import React from 'react';
import { Input } from 'react-bootstrap';
import FeedItem from './FeedItem.jsx';
import SubmitFeedItem from './SubmitFeedItem.jsx';
import UploadMedia from './UploadMedia.jsx';

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '' || 'TEST TEXT',
      url: '' || 'TEST URL.COM',
      credibility: '' || 0,
      type: '' || 'MESSAGE',
      loadCount: 0
    };
    // this.props.client.on('postedFeedItemId', (id) => {
    //   this.setState({feedItemId: id[0]});
    // });
    this.handlePost = this.handlePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    this.loadMorePosts = this.loadMorePosts.bind(this);
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

  render() {
    const feedItems = this.props.feeds.feedItems;
    return (
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
        {(feedItems !== undefined && !Object.is(feedItems, {})) ?
          feedItems.map(item => 
            <FeedItem 
              username={item.username} 
              text={item.text} 
              time={item.time}
              userId={this.props.user.userId}
              itemId={item.id} 
              credibility={item.credibility}
              client={this.props.client}/>) :
          <div></div>
        }
        {/*<button onClick={() => {this.loadMorePosts(); this.props.getFeeds(this.props.events.activeEvent, this.state.loadCount)}}>Load More Posts></button>*/}
        <UploadMedia {...this.props}/>
      </div>
    );
  }
}

export default DayOfFeed;
