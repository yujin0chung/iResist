import React from 'react';
import moment from 'moment';

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

  rotate(e) {
    let img = document.getElementById(e.target.id);
    console.log('IMG: ', img)
    img.setAttribute('style', JSON.parse("{{ transform: 'rotate(90deg)'}}"));
  }

  componentWillMount() {
    if (this.props.type === 'image/jpeg') {
      this.state.element = <img className='media' id={this.props.itemId} onClick={this.rotate.bind(this)} src={this.props.url} />
    } else if (this.props.type === 'image/png') {
      this.state.element = <img className='media' id={this.props.itemId} onClick={this.rotate.bind(this)} src={this.props.url} />
    } else if (this.props.type === 'video/mp4') {
      this.state.element = <video className='media' id={this.props.itemId} src={this.props.url} autoPlay={false} type='video/mp4' controls/>
    } else if (this.props.type === 'video/quicktime') {
      this.state.element = <video className='media' id={this.props.itemId} src={this.props.url} autoPlay={false} type='video/quicktime' controls/>
    }  else {
      this.state.element = <span id={this.props.itemId}>{this.props.text}</span>
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
    var time = moment(Number(this.props.time)).format('h:mm a');
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span> <b>{this.props.username}</b> : {this.state.element} at {time} </span>
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
