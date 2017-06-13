import React from 'react';
import { Popup } from 'react-leaflet';

class PopupForm extends Popup {
  componentDidMount() {
    super.componentDidMount();
    this.leafletElement.openPopup();
  }
}

export default PopupForm;
