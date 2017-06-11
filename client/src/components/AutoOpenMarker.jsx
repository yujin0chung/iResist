import React from 'react';
import { Marker } from 'react-leaflet';

class AutoOpenMarker extends Marker {
  constructor (props) {
    super(props);

    this.state = Object.assign(this.state, {
      inputText: ''
    });
  }

  componentDidMount() {
    super.componentDidMount();
    this.leafletElement.setContent(`
      <form>
        <input
          type="text"
          value={this.state.inputPinText}
          placeholder="What's going on?"
          onChange={e => this.setState({ inputPinText: e.target.value })}
          autofocus
        />
      </form>
    `);
  }
}

export default AutoOpenMarker;
