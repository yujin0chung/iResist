const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Events;

router.post('/', controllers.createEvent);
  
module.exports = router;