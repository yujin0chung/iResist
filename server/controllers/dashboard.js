const models = require('../../db/models');

module.exports.getDashboard = (req, res) => {
  //grab userId from request (2 is a placeholder)
  const userId = req.params.id || 2
  models.User(userId, function(err, userData) {
    if (err) {
      res.send(500, err);
    } else {
      models.Events.findEventIds(userId, 'organizer', (err, eventIds) => {
        if (err) {
          res.send(500, err);
        } else if(eventIds[0]) {
          console.log(eventIds[0].event_id)
          models.Events.findEventData(eventIds[0].event_id, (err, myEventsData) => {
            if (err) {
              res.send(500, err)
            } else {
              models.Events.findEventIds(userId, 'attendee', (err, eventIds) => {
                if (err) {
                  res.send(500, err);
                } else {
                  console.log('HERE EVENT_ID IS', eventIds)
                  models.Events.findEventData(eventIds[0].event_id, (err, eventsData) => {
                    if (err) {
                      res.send(500, err);
                    } else {
                      //console.log('HERE??????')
                      const response = {
                        user: userData,
                        eventsOrg: myEventsData,
                        events: eventsData
                      }
                      res.send(200, response);
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}