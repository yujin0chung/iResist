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

module.exports.postPin = (client, io, event, pin) => {
  models.Map.postPin(pin, (err, pin) => {
    if (err) {
      // emit an error code
    } else {
      let formattedPin = formatPins(pin);
      io.to(event).emit('newPin', formattedPin);
    }
  });
};

module.exports.votePin = (client, io, event, pin) => {
  models.Map.checkForPinVote(pin, (err, pin) => {
    if (err) {
      // emit an error of some sort
    } else {
      if (pin.length === 0) {
        models.map.insertPinVote(pin, (err, pin) => {
          if (err) {
            // emit an error of some sort
          } else {
            // emit a new pin vote event
          }
        });
      } else {
        // send back a vote error
      }
    }
  });
};
