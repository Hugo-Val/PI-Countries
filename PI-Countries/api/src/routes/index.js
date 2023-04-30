const express = require('express');
const router = express.Router();

// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const router = Router();
const getAllCountries = require('./getAllCountries.js');
const getCountryById = require('./getCountryById.js');
const getCountriesByName = require('./getCountriesByName.js');
const postActivity = require('./postActivities.js');
const getActivities = require('./getActivities.js');






// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use(express.json());


// if (router  === getCountriesByName) {
//     router.use(getCountriesByName);
// }
    

router.use(getCountriesByName);
router.use(getCountryById);
router.use(getAllCountries);
router.use(postActivity);
router.use(getActivities);


module.exports = router;
