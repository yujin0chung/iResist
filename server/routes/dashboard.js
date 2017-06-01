const express = require('express');
const router = express.Router();
const controllers = require('../controllers/dashboard');

router.route('/dashboard')
  .get(controllers.load)
  ;

module.exports = router;