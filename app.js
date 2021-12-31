const express = require('express');
const router = express.Router();
const data = require('./data.json');

const app = express();

// set view engine
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

router.get('/', (req, res) => {
    res.render('index', data.projects);
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    let id = req.params.id;
    res.render('project', data.projects[id]);
});

app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});