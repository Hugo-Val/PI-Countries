const { Country } = require('../db.js');

async function getCountriesByName (req, res)  {
    try {
        const { name } = req.query;
        const countries = await Country.findAll({
            where: {
                content : {
                    [Op.notiLike]: `%${name}%`
                }
            }
        });
        res.status(200).json(countries);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

module.exports = getCountriesByName;