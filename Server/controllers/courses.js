const express = require('express');
const router = express.Router();

// model provides access to db
const Courses = require('../models/course');

// CORS UTILITY
// Manual Way
// Allow cross-origin requests
// router.use((req, res, next) => {
//     // hardcoded for now, but must be made configurable
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//     next();
// });

// configure HTTP handlers
router.get('/', (req, res, next) => {
    // HOW TO DO IT PRE-VERSION 7
        // const projects = [{ id: 1, name: "Lab 3" }];
        // return res.status(200).json(projects);
        Courses.find((err, courses) => {
            // status codes are important to tell the client what happened to their request
            if (err) return res.status(500).json(err);
            else return res.status(200).json(courses);
        });
});

// Create post method
router.post('/', (req, res, next) => {
    Courses.create(req.body, (course, err) => {
        course.modules = []
        if (err) return res.status(500).json(err);
        else return res.status(201).json(course); // 201 created successfully
    });
});

router.delete('/:_id', (req, res, next) => {
    Courses.remove({ _id: req.params._id }, (err, course) => {
        if (err) console.log(err);
        else return res.status(204).json(course);
    });
});

router.put('/', (res, req, next) => {
    Courses.findOneAndUpdate({ _id: req.body._id }, req.body, (err, course) => {
        if (err) return res.status(500).json(err);
        else return res.status(202).json(course);
    });
});

module.exports = router;