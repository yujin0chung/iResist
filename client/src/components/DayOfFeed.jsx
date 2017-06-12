import React from 'react';
import { Input } from 'react-bootstrap';
import FeedItem from './FeedItem.jsx';
import SubmitFeedItem from './SubmitFeedItem.jsx';

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '' || 'TEST TEXT',
      url: '' || 'TEST URL.COM',
      credibility: '' || 6,
      userId: this.props.user.userId,
      username: this.props.user.username,
      feedId: '' || 1,
      type: '' || 'MESSAGE',
      posts: [],
      feedItemId: ''
    };
  this.handlePost = this.handlePost.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { client, feedItems } = this.props;
   //this.props.getFeeds(this.props.events.activeEvent);

    client.on('postedFeedItemId', (id) => {
      this.setState({feedItemId: id[0]});
    })

    client.on('newFeedItemFromServer', post => {
      this.props.receiveFeedItem(post);
    })
  }


  handlePost(e) {
    e.preventDefault();
    let newPost = {
      text: this.state.text,
      type: this.state.type,
      url: this.state.url,
      credibility: this.state.credibility,
      userId: this.state.userId,
      username: this.state.username,
      feedId: this.state.feedId,
      feedItemId: this.state.feedItemId
    };
    this.props.client.emit('newFeedItem', newPost);
    this.state.posts.push(newPost);
    // this.props.postItem(newPost);
    this.setState({
      text: '',
      url: '',
      credibility: '',
      type: ''
    });
  }

  handleChange(e) {
    this.setState({text: e.target.value });
  }

  render() {
    const feedItems = this.props.feeds.feedItems;
    console.log('this should be the event Id ', this.props.events.activeEvent);
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
          feedItems.map(item => <div><FeedItem username={item.username} text={item.text} key={this.state.feedItemId}/></div>) :
          <div></div>
        }
        <SubmitFeedItem />
      </div>
    );
  }
}

export default DayOfFeed;
