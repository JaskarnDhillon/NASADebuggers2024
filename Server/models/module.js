const Quiz = require('../models/quiz');
const mongoose = require('mongoose');
const { Schema } = mongoose

let moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    orderNumber: {
        type: Number,
        required: true
    },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    }
});

module.exports = mongoose.model('Module', moduleSchema);
