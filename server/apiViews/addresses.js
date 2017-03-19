const {createSimpleModelView} = require('../utils');

const {addressController} = require('../controllers/addresses');
const addressView = createSimpleModelView(addressController);

module.exports = addressView;