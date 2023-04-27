const { Country } = require('../db.js');

 async function getAllCountries (req, res)  {

    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (e) {
        res.status(500).json({message: 'Error'});
        
    }
   
};

module.exports = getAllCountries;