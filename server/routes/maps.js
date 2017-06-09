const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Maps;

router.get('/all', controllers.getAllMaps);
router.get('/dayof', controllers.getDayOfMap);

module.exports = router;
