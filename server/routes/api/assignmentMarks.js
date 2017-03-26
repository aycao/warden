const {createSimpleModelApiRoute} = require('../../utils');

const {assignmentMarkController} = require('../../controllers/assignmentMarks');
const assignmentMarkApiRoute = createSimpleModelApiRoute(assignmentMarkController);

module.exports = assignmentMarkApiRoute;