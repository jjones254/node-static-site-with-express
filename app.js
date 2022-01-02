const express = require('express');
const data = require('./data.json');

const app = express();

// set view engine
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', data.projects);
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res) => {
    let id = req.params.id;
    res.render('project', data.projects[id]);
});

app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});