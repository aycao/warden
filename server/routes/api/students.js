const {createSimpleModelApiRoute} = require('../../utils');

const {studentController} = require('../../controllers/students');
const studentApiRoute = createSimpleModelApiRoute(studentController);

module.exports = studentApiRoute;