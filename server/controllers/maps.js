const models = require('../../db/models');
const formatMaps = require('../../db/lib/formatMaps');
const formatPins = require('../../db/lib/formatPins');

module.exports.getAllMaps = (req, res) => {
  models.Map.allMaps((err, maps) => {
    if (err) {
      res.send(500, err);
    } else {
      let formattedMaps = formatMaps(maps);
      res.send(200, formattedMaps);
    }
  });
};

module.exports.getDayOfMap = (req, res) => {
  models.Map.dayOfMap(req.query.eventId, (err, map) => {
    if (err) {
      console.log(err);
      res.send(500, err);
    } else {
      let formattedMap = formatPins(map);
      res.send(200, formattedMap);
    }
  });
};

module.exports.postPin = (client, io, room, pin) => {
  models.Map.postPin = ((err, pin) => {
    if (err) {
      // emit an error code
    } else {
      // emit a success code out to everyone
    }
  });
};
