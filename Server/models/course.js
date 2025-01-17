const Module = require('../models/module');
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
    coverImage: {
        type: String
    },
    modules: [{
        type: Schema.Types.ObjectId,
        ref: 'Module',
        required: true
    }],
    enabled: {
        type: Boolean,
        required: true
    },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);