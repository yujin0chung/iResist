const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Dashboard;

router.get('/', controllers.getDashboard);
  
module.exports = router;