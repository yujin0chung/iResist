import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null
};

export default NodeGeocoder(options);
