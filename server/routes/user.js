const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const controllers = require('../controllers').User;

router.get('/id', middleware.auth.apiVerify, (req, res) => {
  controllers.getUserId(req, res);
});

router.get('/events');

module.exports = router;
