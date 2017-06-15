import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Pin from './Pin.jsx';
import styled from 'styled-components';

class DayOfMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPins: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePinSubmit = this.handlePinSubmit.bind(this);
    this.handleCredChange = this.handleCredChange.bind(this);
  }

  componentDidMount() {
    this.props.client.on('pinVoteNotPermitted', (err) => {
      this.props.receivedPinVoteError(err);
    });
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

  handleCredChange(polarity, rateeId, pinId) {
    const pinVote = {
      polarity,
      rateeId,
      pinId,
      raterId: this.props.user.userId
    };

    this.props.client.emit('pinVote', pinVote);
  }

  render() {
    const mapId = this.props.events.allEvents[this.props.events.activeEvent].mapId;
    const currentMap = this.props.maps.allMaps[mapId];
    return (
      <div>

      <Title>{this.props.event.name}</Title>
      <div>
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
          {this.props.maps.allMaps[mapId].pins !== undefined ?
            this.props.maps.allMaps[mapId].pins.map(pin => {
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
              pinId={this.props.maps.pins[pin].id}
              userId={this.props.maps.pins[pin].user_id}
              handleCredChange={this.handleCredChange}
              pinError={this.props.maps.pins[pin].errorMsg}
            />;
            }) : <div></div>
          }
        </Map>
        </div>
      </div>
    );
  }
}

const Title = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:1vh;
  font-size:8vh;
  height: 9vh;
  top:0px;
`;

export default DayOfMap;
