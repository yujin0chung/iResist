import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import AutoOpenMarker from './AutoOpenMarker.jsx';
import prettyMs from 'pretty-ms';

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
            <span>
              <p>{this.props.text}</p>
              <p>Cred: {this.props.pinCred}</p>
              <p>Age: {this.state.displayAge}</p>
              <p>User: {this.props.user}</p>
              <p>User Cred: {this.props.userCred}</p>
              <button onClick={e => this.handleCred(1)}>Upcred!</button>
              <button onClick={e => this.handleCred(-1)}>Downcred!</button>
              {this.props.pinError ? <p>{this.props.pinError}</p> : <div></div>}
            </span>
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
