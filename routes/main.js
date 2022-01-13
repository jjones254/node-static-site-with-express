const express = require('express');
const router = express.Router();

// use the data.json file
const { projects } = require('../data.json');

// render the home page
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// render the about page
router.get('/about', (req, res) => {
    res.render('about');
});

// render the project by id
router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    if (project) {
        res.render('project', { project });
    } else {
        next();
    }
});

module.exports = router;