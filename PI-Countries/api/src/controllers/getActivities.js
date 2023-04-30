const { Activity } = require('../db.js');

async function getActivities (req, res) {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (e) {
        res.status(500).json({message: 'Error getting activities'});
    }
}

module.exports = getActivities;
