const express = require('express');

let router = express.Router();

const schoolApiRoute = require('./schools');
const addressApiRoute = require('./addresses');

router.get('/', (req, res) => {
  res.json({message: 'welcome to warden api'});
});

router.use('/schools', schoolApiRoute);
router.use('/addresses', addressApiRoute);

module.exports = router;