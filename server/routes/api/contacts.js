const {createSimpleModelApiRoute} = require('../../utils');

const {contactController} = require('../../controllers/contacts');
const contactApiRoute = createSimpleModelApiRoute(contactController);

module.exports = contactApiRoute;