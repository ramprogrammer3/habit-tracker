const mongoose = require('mongoose');

// create a habit schema
const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dates: [{
        date: String,
        complete: String
    }]
}, {
    timestamps: true,
})


module.exports = mongoose.model('Habit', habitSchema);
