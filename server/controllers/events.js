const models = require('../../db/models');

module.exports.createEvent = (req, res) => {
  console.log('REQUEST BODY: ', req.body)

  models.Events.createEvent(req.body, (err, data) => {
    if (err) {
      res.send(500, err);
    } else {
      res.send(200, data);
    }
  })
}
