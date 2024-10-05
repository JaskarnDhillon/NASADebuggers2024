const Option = require('../models/option');
const mongoose = require('mongoose');
const { Schema } = mongoose

let moduleSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: Schema.Types.ObjectId,
        ref: 'Option',
        required: true
    }
});

module.exports = mongoose.model('Question', moduleSchema);
