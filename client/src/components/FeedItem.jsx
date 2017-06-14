import React from 'react';
import Timestamp from 'react-timestamp';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      itemId: this.props.itemId,
      element: ''
    };
    this.handleVoteType = this.handleVoteType.bind(this);
  }

  componentWillMount() {
    if (this.props.type === 'image/jpeg') {
      this.state.element = <img style={{width: '500px', height: '350px'}} src={this.props.url} />;
    } else if (this.props.type === 'image/png') {
      this.state.element = <img src={this.props.url} type='image/png' controls/>;
    } else if (this.props.type === 'video/mp4') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/mp4' controls/>;
    } else if (this.props.type === 'video/quicktime') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/quicktime' controls/>;
    } else {
      this.state.element = <span>{this.props.text}</span>;
    }
  }

  handleVoteType(polarity) {
    this.props.handleCredVote({
      userId: this.props.userId,
      itemId: this.props.itemId,
      polarity: polarity
    });
  }
  render() {
    console.log('here are all the props: ', this.props);
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <b>{this.props.username}</b> : {this.state.element}
        <div className="credibility">
          <input placeholder="How credible?" value={this.props.credibility} />
          <button onClick={() => this.handleVoteType(1)}>Upcred</button>
          <button onClick={() => this.handleVoteType(-1)}>Downcred</button>
        </div>
        {this.props.errorMsg ? <p>{this.props.errorMsg}</p> : <div></div>}
      </div>
    );
  }
}

export default FeedItem;
