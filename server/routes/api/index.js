const express = require('express');

let router = express.Router();

const addressApiRoute = require('./addresses');
const assignmentMarkApiRoute = require('./assignmentMarks');
const assignmentApiRoute = require('./assignments');
const {classApiRoute,
    classTimeApiRoute,
    classStudentRelationApiRoute} = require('./classes');
const contactApiRoute = require('./contacts');
const courseApiRoute = require('./courses');
const {departmentApiRoute,
    departmentStaffRoleRelationApiRoute} = require('./departments');
const parentApiRoute = require('./parents');
const schoolApiRoute = require('./schools');
const staffApiRoute = require('./staff');
const studentApiRoute = require('./students');
const termApiRoute = require('./terms');

router.get('/', (req, res) => {
  res.json({message: 'welcome to warden api'});
});

router.use('/addresses', addressApiRoute);
router.use('/assignment-marks', assignmentMarkApiRoute);
router.use('/assignments', assignmentApiRoute);
router.use('/classes', classApiRoute);
router.use('/class-times', classTimeApiRoute);
router.use('/class-student-relation', classStudentRelationApiRoute);
router.use('/contacts', contactApiRoute);
router.use('/courses', courseApiRoute);
router.use('/departments', departmentApiRoute);
router.use('/department-staff-role-relation', departmentStaffRoleRelationApiRoute);
router.use('/parents', parentApiRoute);
router.use('/schools', schoolApiRoute);
router.use('/staff', staffApiRoute);
router.use('/students', studentApiRoute);
router.use('/terms', termApiRoute);


module.exports = router;