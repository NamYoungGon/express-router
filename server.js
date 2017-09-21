const express = require('express');
const app = express();
const route = require('./route/route.js');

app.use(function (req, res, next) {
    console.log('RootTime:', Date.now());
    next();
});

app.use('/', route);

app.listen(3000, function () {
    console.log("Port on 3000!");
});