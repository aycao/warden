const express = require('express');

let router = express.Router();

const schoolView = require('./views/schools');
router.use('/schools', schoolView);

module.exports = router;