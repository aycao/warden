const express = require('express');

let router = express.Router();

const schoolApiRoute = require('./schools');
const addressApiRoute = require('./addresses');
const contactApiRoute = require('./contacts');
const {departmentApiRoute,
    departmentStaffRoleRelationApiRoute} = require('./departments');
const parentApiRoute = require('./parents');
const staffApiRoute = require('./staff');
const studentApiRoute = require('./students');

router.get('/', (req, res) => {
  res.json({message: 'welcome to warden api'});
});

router.use('/schools', schoolApiRoute);
router.use('/addresses', addressApiRoute);
router.use('/contacts', contactApiRoute);
router.use('/departments', departmentApiRoute);
router.use('/department-staff-role-relation', departmentStaffRoleRelationApiRoute);
router.use('/parents', parentApiRoute);
router.use('/staff', staffApiRoute);
router.use('/students', studentApiRoute);


module.exports = router;