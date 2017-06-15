import React from "react";
import moment from "moment";
import { Rotate } from "./StyledComponents.jsx";
import styled from "styled-components";


class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      itemId: this.props.itemId,
      element: ""
    };
    this.handleVoteType = this.handleVoteType.bind(this);
  }

  componentWillMount() {
    if (this.props.type === "image/jpeg") {
      this.state.element = (
        <div className="mediaContainer">
          <img
            style={{ flex: 1,width: '75%',height: '75%'}}
            className="media"
            id={this.props.itemId}
            onDoubleClick={this.rotate.bind(this)}
            src={this.props.url}
          />
        </div>
      );
    } else if (this.props.type === "image/png") {
      this.state.element = (
        <div className="mediaContainer">
          <img
            className="media"
            id={this.props.itemId}
            onDoubleClick={this.rotate.bind(this)}
            src={this.props.url}
          />
        </div>
      );
    } else if (this.props.type === "video/mp4") {
      this.state.element = (
        <div className="mediaContainer">
          <video
            className="media"
            className="media"
            id={this.props.itemId}
            src={this.props.url}
            autoPlay={false}
            type="video/mp4"
            controls
          />
        </div>
      );
    } else if (this.props.type === "video/quicktime") {
      this.state.element = (
        <div className="mediaContainer">
          <video
            className="media"
            className="media"
            id={this.props.itemId}
            src={this.props.url}
            autoPlay={false}
            type="video/quicktime"
            controls
          />
        </div>
      );
    } else {
      this.state.element = (
        <span id={this.props.itemId}>{this.props.text}</span>
      );
    }
  }

  rotate() {
    this.setState({
      element: <Rotate>{this.state.element}</Rotate>
    });
  }

  handleVoteType(polarity) {
    this.props.handleCredVote({
      userId: this.props.userId,
      itemId: this.props.itemId,
      polarity: polarity
    });
  }

  render() {
    var time = moment(Number(this.props.time)).format("h:mm a");
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <VoteHolder>
          <button onClick={() => this.handleVoteType(1)}><img style={{width: '60%'}} src='images/UpArrow.svg'/></button>
          <div style={{textAlign: 'center',color:'#9B9B9B'}}>{this.props.credibility}</div>
          <button onClick={() => this.handleVoteType(-1)}><img  style={{width: '60%'}}  src='images/DownArrow.svg'/></button>
        </VoteHolder>
        <div style={{ flexDirection: "row", flex: 8, paddingTop: '11px', paddingLeft: '10px' }}>
          <div style={{color:'#4A4A4A'}}>{this.props.username}</div>
          <div style={{color:'#C5C5C5', fontSize:'.8em'}}><img style={{width:'1em', marginRight:'5px'}} src='images/Clock.svg'/>{time}</div>
          <div>{this.state.element}</div>
          {/*<div className="credibility" />*/}
        </div>
      </div>
    );
  }
}

const VoteHolder = styled.div`
  flex:1;
  width: 3em;
`;

export default FeedItem;
