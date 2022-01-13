const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// use routes file
const mainRoutes = require('./routes/main');
app.use(mainRoutes);

// 404 error handler
app.use((req, res, next) => {
    const err = new Error('err');
    err.status = 404;
    err.message = 'Looks like that page does not exist.';
    next(err);
});

// global error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
    console.log(err.status);
    console.log(err.message);
});

// serve the app on port 3000
app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});

module.exports = app;