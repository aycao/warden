const {createSimpleModelApiRoute} = require('../../utils');

const {staffController} = require('../../controllers/staff');
const staffApiRoute = createSimpleModelApiRoute(staffController);

module.exports = staffApiRoute;