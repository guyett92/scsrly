const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    content: String,
    goalDate: Date,
    kudos: {
        type: Array,
        default: []
    },
    tasks: Array,
    comments: Array
}, {timestamps: true});

module.exports = mongoose.model('Goal', goalSchema);