const {createSimpleModelView} = require('../utils');

const {schoolController} = require('../controllers/schools');
const schoolView = createSimpleModelView(schoolController);

module.exports = schoolView;