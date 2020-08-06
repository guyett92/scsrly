const Goal = require('../models/goal');
const User = require('../models/user');

module.exports = {
    index,
    create,
    getGoals,
    deleteGoal,
    updateTask,
    deleteTask,
    editDescription,

};

async function editDescription(req, res) {
    try {
        console.log('yes');
        const goal = await Goal.findById(req.params.id);
        console.log(goal);
        console.log(req.body);
        goal.description = req.body;
        await goal.save();
        getGoals(req, res);
    } catch (err) {
        console.log(err);
        res.status(400).json({message: "something went wrong"});
    }
}

async function deleteTask(req, res) {
    try {
        const goal = await Goal.findById(req.params.gid);
        goal.tasks.splice(req.params.tid, 1);
        await goal.save();
        getGoals(req, res);
    } catch (err) {
        console.log(err);
        res.status(400).json({message: "something went wrong"});
    }
}

async function updateTask(req, res) {
    try {
        const goal = await Goal.findById(req.params.gid);
        goal.tasks[req.params.tid].completed = !goal.tasks[req.params.tid].completed;
        await goal.save(function(err) {
            if (err) {
                console.log(err);
            }
        })
        getGoals(req, res);
    } catch(err) {
        res.status(400).json({message: "something went wrong"});
    }
}

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
        res.status(201).json(user.goals);
    } catch (err) {
        console.log(err);
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