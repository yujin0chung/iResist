const expect = require('chai').expect;
const map = require('../../db/models/map');
const event = require('../../db/models/events');
const user = require('../../db/models/user');
const dbUtils = require('../../db/lib/utils.js');

describe('Map model tests', function() {
    // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });


});
