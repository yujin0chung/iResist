import React from 'react';
import Timestamp from 'react-timestamp';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      itemId: this.props.itemId,
      polarity: 0,
      element: ''
<<<<<<< HEAD
    };
    this.handleVoteType = this.handleVoteType.bind(this);
=======
    }
>>>>>>> Biggest change was changing componentDidMount to componentWillMount in Feeditem
  }

  componentWillMount() {
    if (this.props.type === 'image/jpeg') {
      this.state.element = <img style={{width: '500px', height: '350px'}} src={this.props.url} />
    } else if (this.props.type === 'image/png') {
      this.state.element = <img src={this.props.url} type='image/png' controls/>
    } else if (this.props.type === 'video/mp4') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/mp4' controls/>
    } else if (this.props.type === 'video/quicktime') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/quicktime' controls/>
    }  else {
      this.state.element = <span>{this.props.text}</span>
    }
  }

  handleVoteType(type) {
    this.setState({polarity: polarity});
    this.props.handleCredVote(this.state);
  }
  render() {
<<<<<<< HEAD
    return(
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <b>{this.props.username}</b> : <span>{this.props.text}</span> 
        <div className="credibility">
          <input placeholder="How credible?" value={this.props.credibility} />
          <button onClick={() => this.handleVoteType(1)}>Upcred</button>
          <button onClick={() => this.handleVoteType(-1)}>Downcred</button>
        </div>
      </div>

=======
    return (
      <div>
        <b>{this.props.username}</b> : {this.state.element} <span>Posted <Timestamp time={this.props.time} format='time' utc={true}/></span>
      </div>
>>>>>>> Biggest change was changing componentDidMount to componentWillMount in Feeditem
    );
  }
}

export default FeedItem;
