const { Activity } = require('../db');

async function postActivities (req, res) {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        activity.setCountries(countries);
        res.status(200).json(activity);
    } catch (e) {
        res.status(500).json({message: 'Error posting activity'});
    }
}

module.exports = postActivities;