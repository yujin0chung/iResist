import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class Pin extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <Marker>
        <Popup>
          <span>
            {this.props.text}<br/>
            Cred: {this.props.pinCred} <br/>
            Age: {this.props.age} <br/>
            User: {this.props.user}; <br/>
            User Cred: {this.props.userCred} <br/>
          </span>
        </Popup>
      </Marker>
    );
  }
}

export default Pin;
