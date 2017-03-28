const {createSimpleModelApiRoute} = require('../../utils');

const {classController,
  classStudentRelationController,
  classTimeController} = require('../../controllers/classes');
const classApiRoute = createSimpleModelApiRoute(classController);
const classTimeApiRoute = createSimpleModelApiRoute(classTimeController);
const classStudentRelationApiRoute = createSimpleModelApiRoute(classStudentRelationController);

module.exports = {classApiRoute, classTimeApiRoute, classStudentRelationApiRoute};