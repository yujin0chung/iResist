import React from 'react';
import { Input } from 'react-bootstrap';
import FeedItem from './FeedItem.jsx';
import UploadMedia from './UploadMedia.jsx';

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      url: '',
      credibility: '' || 0,
      type: '' || 'MESSAGE',
      pageNumber: 2 //default is already 1
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCredChange = this.handleCredChange.bind(this);
  }

  componentDidMount() {
    this.setState({ pageNumber: 2 });

    this.props.client.on('feedItemVoteNotPermitted', (error) => {
      console.log(error);
    });
  }

  handleLoadItems(pageNumber) {
    this.props.getFeeds(this.props.events.activeEvent, pageNumber);
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
    // const feedItemVote = {
    //   polarity,
    //   rateeId,
    //   feedItemId,
    //   raterId: this.props.user.userId
    // };
    this.props.client.emit('voteFeedItem', feedItemVote);
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
              handleCredVote={this.handleCredChange}
              url={item.url}
              type={item.type}
              client={this.props.client}/>) :
              <div></div>
        }
        <button onClick={() => this.handleLoadItems(this.state.pageNumber++)}>Load More Posts></button>
        <button onClick={() => this.handleLoadItems(this.state.pageNumber--)}>Go back</button>
        <UploadMedia {...this.props}/>
      </div>
    );
  }
}

export default DayOfFeed;
