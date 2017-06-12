const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Feed;

router.get('/all', controllers.getAllFeed);
router.get('/event', controllers.getEventFeed);
router.post('/postItem', controllers.postFeedItem);

module.exports = router;