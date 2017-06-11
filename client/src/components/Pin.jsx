import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import AutoOpenMarker from './AutoOpenMarker.jsx';

class Pin extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputPinText: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePinSubmit(this.state.inputPinText);
  }

  render () {
    if (this.props.type === 'display') {
      return (
        <Marker position={[this.props.lat, this.props.long]}>
          <Popup>
            <span>
              <p>{this.props.text}</p>
              <p>Cred: {this.props.pinCred}</p>
              <p>Age: {this.props.age}</p>
              <p>User: {this.props.user}</p>
              <p>User Cred: {this.props.userCred}</p>
            </span>
          </Popup>
        </Marker>
      );
    } else {
      return (
        <AutoOpenMarker position={[this.props.lat, this.props.long]}>
          <Popup>
            <form>
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
                onClick={ e => this.handleSubmit(e) }
              />
            </form>
          </Popup>
        </AutoOpenMarker>
      );
    }
  }
}

export default Pin;
