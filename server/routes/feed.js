const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Feed;

router.get('/all', controllers.getAllFeed);

module.exports = router;