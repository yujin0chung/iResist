const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Events;

router.post('/create', controllers.createEvent);
router.post('/join', controllers.joinEvent);
router.post('/leave', controllers.leaveEvent);
router.get('/getAllEvents', controllers.getAllEvents);

module.exports = router;
