const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: String,
    goalDate: Date,
    kudos: {
        type: Array,
        default: []
    },
    tasks: [{
        name: {
            type: String,
            require: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }],
    comments: Array
}, {timestamps: true});

module.exports = mongoose.model('Goal', goalSchema);