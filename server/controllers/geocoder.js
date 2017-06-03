const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports.geocode = (req, res) => {

  res.send(200, 'you hit the endpoint!');
};
