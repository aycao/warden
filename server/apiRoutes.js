const express = require('express');

let router = express.Router();

const schoolModelView = require('./apiViews/schools');
const addressModelView = require('./apiViews/addresses');

router.get('/', (req, res) => {
  res.json({message: 'welcome to warden api'});
});

router.use('/schools', schoolModelView);
router.use('/addresses', addressModelView);

module.exports = router;