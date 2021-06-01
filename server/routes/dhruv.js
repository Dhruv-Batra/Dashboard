var express = require('express');
var router = express.Router();
const db = require('../firebase')

router.get('/', function(req, res) {
    res.sendStatus(200);
});

module.exports = router;