const Question = require('../models/question');
const mongoose = require('mongoose');
const { Schema } = mongoose

let quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: [{
        question: String,
        options: [{
            option: String,
            correct: Boolean
        }]
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);