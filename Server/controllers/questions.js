const Questions = require('../models/question');

exports.get = async function (req, res) {
    try {
        const questions = await Questions.find();
        return res.status(200).json(questions);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getQuestionById = async function (req, res) {
    try {
        const question = await Questions.findById(req.params._id);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        return res.status(200).json(question);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};