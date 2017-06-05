import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import l from 'leaflet';

const MapContainer = (props) => {
  const mapId = props.protest.mapId;
  const position = [props.fetchInitDataReducer.data.maps[mapId].lat, props.fetchInitDataReducer.data.maps[mapId].long];
  const map = (
    <Map className={props.mapType} center={position} zoom={17}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      </Marker>
      }) }
    </Map>
  );
  return map;
};

export default MapContainer;


