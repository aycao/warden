const express = require('express');

let router = express.Router();

const schoolView = require('./apiViews/schools');
const addressView = require('./apiViews/addresses');

router.get('/', (req, res) => {
  res.json({message: 'welcome to warden api'});
});

router.use('/schools', schoolView);
router.use('/addresses', addressView);

module.exports = router;