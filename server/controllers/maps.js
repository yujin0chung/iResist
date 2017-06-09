const models = require('../../db/models');
const formatMaps = require('../../db/lib/formatMaps');

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
      res.send(500, err);
    } else {
      res.send(200, map);
    }
  });
};
