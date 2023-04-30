const express = require('express');
const router = express.Router();
const postActivity = require('../controllers/postActivities');

router.post('/activities', postActivity);


module.exports = router;