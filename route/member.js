var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('----- Member Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function (req, res) {
    res.send('Member home page');
});

// define the about route
router.get('/join', function (req, res) {
    res.send('Member join');
});

module.exports = router;