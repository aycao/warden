const {simpleModelView} = require('../utils');

const {schoolController} = require('../controllers/schools');
const schoolView = simpleModelView(schoolController);

module.exports = schoolView;