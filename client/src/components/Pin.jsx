import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class Pin extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <Marker></Marker>
    );
  }
}

export default Pin;
