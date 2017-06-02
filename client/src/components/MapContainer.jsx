import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import l from 'leaflet';

const MapContainer = (props) => {
  console.log('THESE ARE THE PROPS DOWN IN THE PROTEST:', props);
  const position = [53.505, -0.09];
  const map = (
    <Map className={props.mapType} center={position} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      </Marker>
      {/*{ positions.map((position) => {
        return (
          <Marker position={position} draggable={true}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
        </Marker>
        );*/}
      }) }
    </Map>
  );
  return map;
};

export default MapContainer;
