import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class DayOfMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick(d) {
    console.log('I REGISTERED A CLICK!', d);
  }

  render() {
    const mapId = this.props.events.allEvents[this.props.events.activeEvent].mapId;
    const currentMap = this.props.maps.allMaps[mapId];
    return (
      <div>
        <h2>This will be the map</h2>
        <Map
          className='day-of-map'
          center={[currentMap.lat, currentMap.long]}
          zoom={15}
          onClick={this.handleClick}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[currentMap.lat, currentMap.long]}>
            <Popup>
              <span>Event meeting location</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default DayOfMap;
