const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/main');
app.use(mainRoutes);

app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});

app.use((req, res, next) => {
    const err = new Error('err');
    err.status = 404;
    err.message = 'Looks like that page does not exist.';
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
    console.log(err.status);
    console.log(err.message);
});

module.exports = app;