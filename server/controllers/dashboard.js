const models = require('../../db/models');

module.exports.getDashboard = (req, res) => {
  //grab userId from request (2 is a placeholder)
  const id = req.params.id || 2
  models.User(id, function(err, userData) {
    if (err) {
      res.send(500, err);
    } else {
      models.Events(id, function(err, eventData) {
        if (err) {
          res.send(500, err);
        } else {

        }
      })
    }
  })
}