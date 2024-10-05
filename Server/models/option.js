const mongoose = require('mongoose');

let optionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Option', optionSchema);
