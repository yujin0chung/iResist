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
  models.Map.checkForPinVote(pin, (err, responsePin) => {
    if (err) {
    } else {
      if (responsePin.length === 0) {
        models.Map.insertPinVote(pin, (err, insertResponsePin) => {
          if (err) {
            console.log(err);
          } else {
            io.to(event).emit('newPinVote', {
              pinId: pin.pinId,
              change: pin.polarity
            });
          }
        });
      } else if (responsePin[0].up_down !== pin.polarity) {
        models.Map.replacePinVote(pin, (err, replaceResponePin) => {
          if (err) {
            console.log(err);
          } else {
            io.to(event).emit('newPinVote', {
              pinId: pin.pinId,
              change: pin.polarity * 2
            });
          }
        });
      } else {
        client.emit('pinVoteNotPermitted', {
          msg: 'You have already voted on that pin'
        });
      }
    }
  });
};
