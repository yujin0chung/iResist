const models = require('../../db/models');

module.exports.createEvent = (req, res) => {

  models.Events.createEvent(req.body, (err, data) => {
    console.log('REQUEST BODY: ', req.body)
    if (err) {
      res.send(500, err);
    } else {
      models.Map.makeMap(data[0], req.body.lat, req.body.long, (err, mapData) => {
        if (err) {
          res.send(500, err) 
        } else {
          res.send(200, data)
        }
      })
    }
  })
}
