const models = require('../../db/models');
const format = require('../../db/lib/formatDashboard.js');

module.exports.getDashboard = (req, res) => {
  //grab userId from request (2 is a placeholder)
  const userId = req.params.id || 6
  
  models.Events.findAllEvents((err, allEvents) => {
    if (err) {
      res.send(500, err);
    } else {
      models.Events.findAllAttendees((err, allAttendees) => {
        if (err) {
          res.send(500, err) 
        } else {
          models.Map.allMaps((err, allMaps) => {
            if (err) {
              res.send(500, err) 
            } else {
              models.Feed.allFeeds((err, allFeeds) => {
                if (err) {
                  res.send(500, err);
                } else {
                  models.User.allUsers((err, allUsers) => {
                    if (err) {
                      res.send(500, err) 
                    } else {
                      models.User.user(userId, (err, userData) => {
                        if (err) {
                          res.send(500, err) 
                        } else {
                          var response = {
                            allEvents: allEvents,
                            allAttendees: allAttendees,
                            allMaps: allMaps,
                            allFeeds: allFeeds,
                            allUsers: allUsers,
                            user: userData
                          }
                          res.send(200, format(response));
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
  })
}