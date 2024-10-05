const Courses = require('../models/course');

exports.get = async function (req, res) {
    try {
        const courses = await Courses.find();
        return res.status(200).json(courses);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getCourseById = async function (req, res) {
    try {
        const course = await Courses.findById(req.params._id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.status(200).json(course);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};