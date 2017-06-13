import React from 'react';
import Timestamp from 'react-timestamp';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ''
    }

  }

  componentDidMount() {
    if (this.props.type === 'image/jpeg') {
      this.state.element = <img style={{width: '500px', height: '350px'}} src={this.props.url} />
    } else if (this.props.type === 'video/mp4') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/mp4' controls/>
    } else if (this.props.type === 'video/quicktime') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/quicktime' controls/>
    } else if (this.props.type === 'video/png') {
      this.state.element = <video src={this.props.url} autoPlay={false} type='video/png' controls/>
    } else {
      this.state.element = <span>{this.props.text}</span>
    } 
  }

  render() {
    return (

      <div>
        <b>{this.props.username}</b> : {this.state.element} <span>Posted <Timestamp time={this.props.time} format='time'  utc={true}/></span>
      </div>


    );
  }
}



export default FeedItem;
