import React from 'react';
import moment from 'moment';
import { Rotate } from './StyledComponents.jsx'

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
      this.state.element = 
        <div className='mediaContainer' >
          <img className='media' id={this.props.itemId} onDoubleClick={this.rotate.bind(this)} src={this.props.url} />
        </div>
    } else if (this.props.type === 'image/png') {
      this.state.element = 
        <div className='mediaContainer'>
          <img className='media' id={this.props.itemId} onDoubleClick={this.rotate.bind(this)} src={this.props.url} />
        </div>
    } else if (this.props.type === 'video/mp4') {
      this.state.element = 
        <div className='mediaContainer'>
          <video className='media' className='media' id={this.props.itemId} src={this.props.url} autoPlay={false} type='video/mp4' controls/>
        </div>
    } else if (this.props.type === 'video/quicktime') {
      this.state.element = 
        <div className='mediaContainer'>
          <video className='media' className='media' id={this.props.itemId} src={this.props.url} autoPlay={false} type='video/quicktime' controls/>
        </div>
    }  else {
      this.state.element = <span id={this.props.itemId}>{this.props.text}</span>
    }
  }

  rotate() {
    this.setState({
      element: <Rotate>{this.state.element}</Rotate>
    })
  }

  handleVoteType(polarity) {
    this.props.handleCredVote({
      userId: this.props.userId,
      itemId: this.props.itemId,
      polarity: polarity
    });
  }

  render() {
    console.log('THIS.STATE.ELEMENT', this.state.element)
    console.log('THIS.PROPS.TYPE FROM DAYOFFEED', this.props.type)
    var time = moment(Number(this.props.time)).format('h:mm a');
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span> <b>{this.props.username}</b> : {this.props.text} at {time} </span>
        {this.state.element}
        <div className="credibility">
          <input placeholder="How credible?" value={this.props.credibility} />
          <button onClick={() => this.handleVoteType(1)}>Upcred</button>
          <button onClick={() => this.handleVoteType(-1)}>Downcred</button>
        </div>
      </div>
    );
  }
}

export default FeedItem;
