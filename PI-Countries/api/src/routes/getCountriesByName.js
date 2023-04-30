const express = require('express');
const router = express.Router();
const getCountriesByName = require('../controllers/getCountriesByName');

router.get('/countries/name', getCountriesByName);

module.exports = router;