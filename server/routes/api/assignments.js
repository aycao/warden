const {createSimpleModelApiRoute} = require('../../utils');

const {assignmentController} = require('../../controllers/assignments');
const assignmentApiRoute = createSimpleModelApiRoute(assignmentController);

module.exports = assignmentApiRoute;