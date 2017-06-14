const expect = require('chai').expect;
const map = require('../../db/models/map');
const event = require('../../db/models/events');
const user = require('../../db/models/user');
const dbUtils = require('../../db/lib/utils.js');

describe('Map model tests', function() {
    // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(function() {
      user.insertUser('test-user', function() {
        event.createEvent({ eventId: '',
          name: 'test event',
          userId: 1,
          description: 'okie dokie',
          cause: 'time to go!',
          address: 'san francisco',
          date: '2017-10-10',
          timeStart: '10:00',
          timeEnd: '17:10',
          lat: 37.7792808,
          long: -122.4192363,
          protests: [ [ 37.7792808, -122.4192363 ] ],
          zoom: 14,
          timezone: '',
          isEditing: false },
        function(err, data) {
          map.makeMap(1, 0, 0, function(err, data) {
            done();
          });
        });
      });
    });
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('should be able to make new maps', function(done) {
    map.makeMap(1, 0, 0, function(err, data) {
      expect(err).to.equal(null);
      expect(data.rowCount).to.equal(1);
      done();
    });
  });

  it('should be able to fetch a map by event id', function(done) {
    map.findMapById(1, function(err, data) {
      expect(err).to.equal(null);
      expect(data[0].id).to.equal(1);
      expect(data[0].lat).to.equal(0);
      done();
    });
  });
});
