const models = require('../../db/models');

module.exports.getUserId = (req, res) => {
  res.send(200, {
    user: req.user
  });
};

module.exports.getUserEvents = (req, res) => {
  models.User.getUserEvents(req.query.userId, (err, userEvents) => {
    if (err) {
      res.send(500, err);
    }
    else {
      res.send(200, userEvents);
    }
  });
}