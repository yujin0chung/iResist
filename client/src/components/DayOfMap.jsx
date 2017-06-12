import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Pin from './Pin.jsx';

class DayOfMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPins: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePinSubmit = this.handlePinSubmit.bind(this);
  }

  handleClick(data) {
    if (this.state.inputPins.length > 0) {
      this.setState({
        inputPins: []
      });
    }

    let pin = {
      lat: data.latlng.lat,
      lng: data.latlng.lng
    };

    this.setState({
      inputPins: [pin]
    });
  }

  handlePinSubmit(pinText, lat, long) {
    let newPin = {
      map_id: this.props.maps.allMaps[this.props.events.allEvents[this.props.events.activeEvent].id].id,
      text: pinText,
      latitude: lat,
      longitude: long,
      credibility: 0,
      time: Date.now(),
      user_id: this.props.user.userId,
    };

    this.props.client.emit('newPin', newPin);

    this.setState({
      inputPins: []
    });
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
          keyboard={false}
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
          {this.state.inputPins.map((pin, i) => {
            return <Pin lat={pin.lat} long={pin.lng} handlePinSubmit={this.handlePinSubmit} key={i}/>;
          })}
          {this.props.maps.allMaps[mapId].pins.map(pin => {
            return <Pin
              lat={this.props.maps.pins[pin].latitude}
              long={this.props.maps.pins[pin].longitude}
              text={this.props.maps.pins[pin].text}
              pinCred={this.props.maps.pins[pin].credibility}
              age={this.props.maps.pins[pin].time}
              user={this.props.users.users[this.props.maps.pins[pin].user_id].username}
              userCred={this.props.users.users[this.props.maps.pins[pin].user_id].credibility}
              type='display'
              key={this.props.maps.pins[pin].id}
            />;
          })}
        </Map>
      </div>
    );
  }
}

export default DayOfMap;
