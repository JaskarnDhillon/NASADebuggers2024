const Quiz = require('../models/quiz');

exports.get = async function (req, res) {
    try {
        const quizzes = await Quiz.find();
        return res.status(200).json(quizzes);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getQuizById = async function (req, res) {
    try {
        const quiz = await Quiz.findById(req.params._id);
        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }
        return res.status(200).json(quiz);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};