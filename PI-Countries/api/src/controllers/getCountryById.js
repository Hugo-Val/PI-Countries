const { Country } = require('../db.js');

async function getCountryById (req, res)  {
    
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id);
        res.status(200).json(country);
    } catch (e) {
        res.status(500).json({message: 'Error'});
        
    }
}

module.exports = getCountryById;