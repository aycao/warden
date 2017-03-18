const express = require('express');

let router = express.Router();

const schoolController = require('./controllers/schools');
router.route('/')
    .get((req, res) => {
      res.json({message: 'warden API'});
    });
router.route('/schools')
    .get((req, res) => {
      res.json(schoolController.findAll());
    });

module.exports = router;