const express = require('express');
const router = express.Router();
const  getAllCountries  = require('../controllers/getAllCountries');

router.get('/countries', getAllCountries);
    
module.exports = router;