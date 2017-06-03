const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports.geocode = (req, res) => {
  geocoder.geocode(req.query.address)
  .then(response => {
    res.send(200, response);
  })
  .catch(err => {
    res.send(500, err);
  });
};
