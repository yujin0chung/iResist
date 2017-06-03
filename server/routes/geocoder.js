const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Geocoder;

router.get('/', controllers.SOMETHING);

module.exports = router;
