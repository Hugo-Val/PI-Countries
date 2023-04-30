const { Country } = require('../db.js');

async function getCountryById (req, res)  {
    
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({message: 'Country not found'});
        }
        const country = await Country.findByPk(id);
        if (!country) {
            return res.status(400).json({message: 'Country not found'});
        }

        res.status(200).json(country);
    } catch (e) {
        res.status(500).json({message: 'Error'});
        
    }
}

module.exports = getCountryById;