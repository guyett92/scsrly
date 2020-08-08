const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    updateBio,
    getUser
};

/*-------- HELPER FUNCTIONS --------*/
function createJWT(user) {
    return jwt.sign({user}, SECRET, {expiresIn: '12h'});
}

async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (err){
        console.log(err);
        res.status(400).json({message: "something went wrong"});
    }
}


async function updateBio(req, res) {
    try {
        const user = await User.findById(req.params.id);
        console.log(req.body.bio);
        user.bio = req.body.bio;
        await user.save();
        getUser(req, res);
    } catch(err) {
        console.log(err);
        res.status(400).json({message: "something went wrong"});
    }
}

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        // Send back a JWT
        const token = createJWT(user);
        res.json({ token });
    } catch(err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(401).json({err: 'Bad credentials!'});
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
              const token = createJWT(user);
              res.json({token});
            } else {
              return res.status(401).json({err: 'bad credentials'});
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}