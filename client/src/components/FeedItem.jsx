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
      <Item>
  
        <VoteHolder>
          <VoteUp className="fa fa-caret-up fa-lg" onClick={() => this.handleVoteType(1)} style={{width: '50%'}} src='images/UpArrow.svg'/>
          <div style={{textAlign: 'inherit',color:'#9B9B9B'}}>{this.props.credibility}</div>
          <VoteDown className="fa fa-caret-down fa-lg" onClick={() => this.handleVoteType(-1)} style={{width: '50%'}}  src='images/DownArrow.svg'/>
        </VoteHolder>
        <div style={{ flexDirection: "row", flex: 8, paddingLeft: '10px' }}>
          <div style={{color:'#4A4A4A'}}>{this.props.username}</div>
          <div style={{color:'#C5C5C5', fontSize:'.8em'}}><img style={{width:'1em', marginRight:'5px'}} src='images/Clock.svg'/>{time}</div>
          <div>{this.state.element}</div>
        </div>
      </Item>
    );
  }
}

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  border: 1px solid #eee;
  margin-top: 9px;
  border-right: none;
  border-left: none;
  border-top: none;
`;

const VoteHolder = styled.div`
  flex:1;
  width: 3em;
  padding-left: 12px;
`;

const VoteButton = styled.i`
  width: 30%;
`

const VoteUp = styled.i`
  color: hsla(120, 90%, 42%, 0.93);
  width: 30%;
`

const VoteDown = styled.i`
  color: rgba(245, 97, 35, 0.94);
  width: 30%;
`

export default FeedItem;
