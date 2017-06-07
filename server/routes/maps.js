const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Events;

router.get('/all', controllers.getAllMaps);

module.exports = router;
