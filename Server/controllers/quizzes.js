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

exports.submitQuiz = async function (req, res) {
    try {
        const { answers } = req.body;
        const quiz = await Quiz.findById(req.params._id);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        let correctAnswersCount = 0;

        // Validate answers
        quiz.questions.forEach((question, index) => {
            const userAnswer = answers[index];  // Ensure the answer indexing matches
            const correctOption = question.options.find(option => option.correct);

            if (userAnswer === correctOption.option) {
                correctAnswersCount++;
            }
        });

        // Determine pass/fail (or set your own criteria)
        if (correctAnswersCount === quiz.questions.length) {
            return res.status(200).json({ message: 'Success! All answers are correct.' });
        } else {
            return res.status(200).json({ message: 'Some answers are incorrect.' });
        }
    } catch (err) {
        console.error('Error submitting quiz:', err);  // Log the error
        return res.status(500).json({ message: 'Error submitting quiz', error: err.message });
    }
}
