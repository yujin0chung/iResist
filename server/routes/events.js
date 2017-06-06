const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Events;

router.post('/create', controllers.createEvent);
router.post('/join', controllers.joinEvent);
router.get('/getAllEvents', controllers.getAllEvents);
router.get('/all', controllers.getAllEvents);

module.exports = router;
