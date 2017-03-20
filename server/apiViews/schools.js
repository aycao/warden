const {createSimpleModelView} = require('../utils');

const {schoolController} = require('../controllers/schools');
const schoolModelView = createSimpleModelView(schoolController);

module.exports = schoolModelView;