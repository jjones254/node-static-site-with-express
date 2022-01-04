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