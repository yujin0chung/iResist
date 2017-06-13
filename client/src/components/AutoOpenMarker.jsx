import React from 'react';
import { Marker } from 'react-leaflet';

class AutoOpenMarker extends Marker {
  componentDidMount() {
    super.componentDidMount();
    this.leafletElement.openPopup();
  }
}

export default AutoOpenMarker;
