import React from 'react';
import { Input } from 'react-bootstrap';
import FeedItem from './FeedItem.jsx';
import UploadMedia from './UploadMedia.jsx';
import InfiteScroll from 'redux-infinite-scroll';

class DayOfFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      url: '',
      credibility: '' || 0,
      type: '' || 'MESSAGE',
      pageNumber: 1, //default is already 1,
      feedItemCount: 0
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCredChange = this.handleCredChange.bind(this);
  }


  componentDidMount() {
    this.setState({ pageNumber: 2 });

    this.props.client.on('feedItemVoteNotPermitted', (error) => {
      this.props.receiveFeedItemVoteError(error);
    });
  }




  handleLoadItems(pageNumber, feedItemsIncrement) {
    this.props.getFeeds(this.props.events.activeEvent, pageNumber);
    this.setState({ feedItemCount: this.state.feedItemCount + feedItemsIncrement })
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


  render() {
    console.log('THIS IS THE PAGE NUMBER', this.state.pageNumber);
    console.log('THIS.STATE.FEEDITEMCOUNT', this.state.feedItemCount)
    const feedItems = this.props.feeds.feedItems;
    console.log('this is feedItems: ', feedItems);
    // let goBackButton;
    // if (this.state.feedItemCount === 0 ) {
    //   goBackButton = <div></div>
    // }
    let feedItemsLength;
    if (feedItems.length < 10) {
      feedItemsLength = feedItems.length + (10 - feedItems.length)
    } else {
      feedItemsLength = feedItems.length;
    }

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
              client={this.props.client}/>) :
              <div></div>
        }
     
        {this.state.feedItemCount + feedItems.length >= this.props.feeds.collectionLength && feedItems.length < 10 && feedItem.length !== 0 ? 
          <div></div> :
          <div>
            <button onClick={() => this.handleLoadItems(this.state.pageNumber++, feedItems.length)}>Load More Posts></button>
            <button onClick={() => this.handleLoadItems(this.state.pageNumber--, (-feedItems.length))}>Go back</button>
          </div>
        }

       { this.state.feedItemCount === 0 ? 
         <div></div> :
         <button onClick={() => this.handleLoadItems(this.state.pageNumber--, (-feedItems.length))}>Go back</button>
       }

       {/*{feedItems.length < 10 ? 
          <button onClick={() => this.handleLoadItems(this.state.pageNumber--, (-feedItemsLength))}>TEST</button> :
          <div></div>
       }*/}
        
  
        <UploadMedia {...this.props}/>
      </div>
    );
  }
}

export default DayOfFeed;


//