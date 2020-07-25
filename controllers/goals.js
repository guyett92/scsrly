const Goal = require('../models/goal');

module.exports = {
    getGoals
};

async function getGoals(req, res) {
    try {
        const goals = await Goal.find({}).limit(10).sort({goalDate: 1});
        res.json(goals);
        res.status(201).json(goals);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
    }
}