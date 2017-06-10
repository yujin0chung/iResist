import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class Pin extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      inputPinText: ''
    };
  }

  render () {
    if (this.props.type === 'display') {
      return (
        <Marker>
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
        <Marker>
          <Popup>
            <form>
              <input
                type="text"
                value={this.state.inputPinText}
                placeholder="What's going on?"
                onChange={e => this.setState({ inputPinText: e.target.value })}
                autofocus
              />
            </form>
          </Popup>
        </Marker>
      );
    }
  }
}

export default Pin;
