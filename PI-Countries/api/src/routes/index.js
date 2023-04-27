const express = require('express');
const router = express.Router();

// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const router = Router();
const getAllCountries = require('./getAllCountries.js');
const getCountryById = require('./getCountryById.js');





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use(getAllCountries);
router.use(getCountryById);


module.exports = router;
