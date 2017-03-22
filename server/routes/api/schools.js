const {createSimpleModelApiRoute} = require('../../utils');

const {schoolController} = require('../../controllers/schools');
const schoolApiRoute = createSimpleModelApiRoute(schoolController);

module.exports = schoolApiRoute;