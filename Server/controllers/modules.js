const express = require('express');
const router = express.Router();
const Module = require('../models/module');

// GET: /test => fetch all test
router.get('/', async(req, res) => {
    const media = [
        {
            id: 1,
            name: 'Media 1',
            description: 'Description 1'
        },
        {
            id: 2,
            name: 'Media 2',
            description: 'Description 2'
        }
    ];
    
    return res.json(media).status(200);
})

module.exports = router;