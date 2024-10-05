const Question = require('../models/question');
const mongoose = require('mongoose');
const { Schema } = mongoose

let courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modules: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
});

module.exports = mongoose.model('Quiz', courseSchema);