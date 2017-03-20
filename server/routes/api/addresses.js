const {createSimpleModelApiRoute} = require('../../utils');

const {addressController} = require('../../controllers/addresses');
const addressApiRoute = createSimpleModelApiRoute(addressController);

module.exports = addressApiRoute;