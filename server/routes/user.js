const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const controllers = require('../controllers');

router.get('/id', middleware.auth.apiVerify, (req, res) => {
  controllers.geocode(req, res);
});

module.exports = router;
