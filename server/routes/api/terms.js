const {createSimpleModelApiRoute} = require('../../utils');

const {termController} = require('../../controllers/terms');
const termApiRoute = createSimpleModelApiRoute(termController);

module.exports = termApiRoute;