const {createSimpleModelApiRoute} = require('../../utils');

const {parentController} = require('../../controllers/parents');
const parentApiRoute = createSimpleModelApiRoute(parentController);

module.exports = parentApiRoute;