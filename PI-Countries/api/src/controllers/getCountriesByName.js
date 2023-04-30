const { Country } = require('../db.js');
const { Op } = require('sequelize');

async function getCountriesByName (req, res)  {
    try {
        const { name } = req.query;
        const countries = await Country.findAll({
            where: {
                name : {
                    [Op.iLike]: `%${name.replace(/[""]/g,"")}%`
                }
            }
        });
        console.log(countries);
        res.status(200).json(countries);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'Error getCountriesByName'});
    }
}

module.exports = getCountriesByName;