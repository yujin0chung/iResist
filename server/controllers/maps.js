const models = require('../../db/models');

module.exports.getAllMaps = (req, res) => {
  models.Map.allMaps((err, maps) => {
    if (err) {
      res.send(500, err);
    } else {
      res.send(200, maps);
    }
  });
};
