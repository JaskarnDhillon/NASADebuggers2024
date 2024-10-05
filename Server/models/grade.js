const Quiz = require('../models/quiz');
const User = require('../models/uzer');
const mongoose = require('mongoose');
const { Schema } = mongoose

let gradeSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    quiz: { 
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Grade', gradeSchema);