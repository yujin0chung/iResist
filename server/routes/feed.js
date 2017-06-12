const express = require('express');
const router = express.Router();
const controllers = require('../controllers').Feed;
const upload = require('../middleware').media;

router.get('/all', controllers.getAllFeed);
router.get('/event', controllers.getEventFeed);
router.post('/postItem', controllers.postFeedItem);
router.route('/upload')
  .post(upload.single('mediaUpload'), controllers.uploadMedia);
  

module.exports = router;