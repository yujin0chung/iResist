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
  console.log('VOTE PIN RAN');
  models.Map.checkForPinVote(pin, (err, responsePin) => {
    if (err) {
      console.log('THIS IS THE ERR OF CHECKING FOR PIN VOTE', err);
    } else {
      console.log('RESPONSE PIN: ', responsePin.length);
      if (responsePin.length === 0) {
        console.log('bool ran');
        models.Map.insertPinVote(pin, (err, insertResponsePin) => {
          if (err) {
            console.log(err);
          } else {
            console.log(pin);
          }
        });
      } else {
        // send back a vote error
      }
    }
  });
};
