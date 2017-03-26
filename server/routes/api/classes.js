const {createSimpleModelApiRoute} = require('../../utils');

const {classController} = require('../../controllers/classes');
const classApiRoute = createSimpleModelApiRoute(classController);

module.exports = classApiRoute;