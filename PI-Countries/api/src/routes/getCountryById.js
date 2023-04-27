const express = require('express');
const router = express.Router();
const  getAllCountries  = require('../controllers/getCountryById');

router.get('/countries/:id', getAllCountries);

module.exports = router;
