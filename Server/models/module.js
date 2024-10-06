const Quiz = require('../models/quiz');
const Course = require('../models/course');
const mongoose = require('mongoose');
const { Schema } = mongoose

let moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pageLink: {
        type: String,
        required: true
    },
    orderNumber: {
        type: Number,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    }
});

module.exports = mongoose.model('Module', moduleSchema);
