import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import AutoOpenMarker from './AutoOpenMarker.jsx';
import prettyMs from 'pretty-ms';
import {
  VoteHolder,
  VoteImage,
  CredCount,
  PinWrapper,
  PinContent,
  ItemUserName,
  TimeStamp,
  TimeImage } from './StyledComponents.jsx';

class Pin extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputPinText: '',
      displayAge: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCred = this.handleCred.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePinSubmit(this.state.inputPinText, this.props.lat, this.props.long);
  }

  handleClick(e) {
    const msDif = Date.now() - this.props.age;
    const newDisplayAge = prettyMs(msDif, {secDecimalDigits: 0});
    this.setState({
      displayAge: newDisplayAge
    });
  }

  handleCred(polarity) {
    this.props.handleCredChange(polarity, this.props.userId, this.props.pinId);
  }

  render () {
    if (this.props.type === 'display') {
      return (
        <Marker position={[this.props.lat, this.props.long]} onClick={e => this.handleClick(e)}>
          <Popup>
            <PinWrapper>
              <VoteHolder>
                <button onClick={e => this.handleCred(1)}><VoteImage src='images/UpArrow.svg'/></button>
                <CredCount>{this.props.pinCred}</CredCount>
                {/*<div style={{textAlign: 'center', color: '#9B9B9B'}}>{this.props.pinCred}</div>*/}
                <button onClick={e => this.handleCred(-1)}><VoteImage src='images/DownArrow.svg'/></button>
              </VoteHolder>
              <PinContent>
                <ItemUserName>{this.props.user}</ItemUserName>
                <TimeStamp><TimeImage src='images/Clock.svg'/>{this.state.displayAge} ago</TimeStamp>
                <div>{this.props.text}</div>
                {this.props.pinError ? <p>{this.props.pinError}</p> : <div></div>}
              </PinContent>
            </PinWrapper>
          </Popup>
        </Marker>
      );
    } else {
      return (
        <AutoOpenMarker position={[this.props.lat, this.props.long]} keyboard={false}>
          <Popup>
            <form onSubmit={ e => this.handleSubmit(e) }>
              <input
                type="text"
                value={this.state.inputPinText}
                placeholder="What's going on?"
                onChange={e => this.setState({ inputPinText: e.target.value })}
                autoFocus
              />
              <input
                type="submit"
                value="Submit"
              />
            </form >
          </Popup>
        </AutoOpenMarker>
      );
    }
  }
}

export default Pin;
