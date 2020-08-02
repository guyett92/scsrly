const Goal = require('../models/goal');
const User = require('../models/user');

module.exports = {
    getGoals,
    create,
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

async function create(req, res) {
    try {
        // Find the user who created the goal
        const user = await User.findById(req.user.id);
        // Create the goal
        const goal = await Goal.create(req.body);
        // Add the goal to the user's array of goals
        user.goals.push(goal);
        user.save(function(err) {
            if(err) console.log(err);
        });
    } catch(error) {
        res.status(400).json({message: "something went wrong"});
    }
}