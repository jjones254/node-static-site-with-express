const express = require('express');
const app = express();
const { projects } = require('./data.json');




// set view engine
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});