const Goal = require('../models/goal');
const User = require('../models/user');

module.exports = {
    index,
    create,
    getGoals,
    deleteGoal
};

async function deleteGoal(req, res) {
    try {
        /* Remove from the user's array as well */
        await Goal.findByIdAndDelete(req.params.id);
        const user = await User.findById(req.user._id);
        for (let i = 0; i < user.goals.length; i++) {
            if (user.goals[i].equals(req.params.id)) {
                user.goals.splice(i, 1);
            }
            user.save(function(err) {
                if (err) {
                    console.log(err);
                }
            })
        }
        getGoals(req, res);
    } catch (err) {
        res.status(400).json({message: "something went wrong"});
    }
}

async function getGoals(req, res) {
    try {
        const user = await User.findById(req.user._id).populate('goals');
        console.log(user.goals);
        res.json(user.goals);
        res.status(201).json(user.goals);
    } catch (err) {
        res.status(400).json({message: "something went wrong"});
    }
}

async function index(req, res) {
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
        console.log(req.user);
        const user = await User.findById(req.user._id);
        // Create the goal
        const goal = await Goal.create(req.body);
        // Add the goal to the user's array of goals
        user.goals.push(goal._id);
        user.save(function(err) {
            if(err) console.log(err);
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "something went wrong"});
    }
}