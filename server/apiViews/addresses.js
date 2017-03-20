const {createSimpleModelView} = require('../utils');

const {addressController} = require('../controllers/addresses');
const addressModelView = createSimpleModelView(addressController);

module.exports = addressModelView;