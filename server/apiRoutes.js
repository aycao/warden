const express = require('express');
const mongoose = require('mongoose');
const dbLogin = require('./dbLogin');

mongoose.connect(dbLogin.address);

let router = express.Router();

router.route('/')
    .get((req, res) => {
      res.json({message: 'warden API'});
    });

module.exports = router;