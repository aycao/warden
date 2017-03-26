const {createSimpleModelApiRoute} = require('../../utils');

const {courseController} = require('../../controllers/courses');
const courseApiRoute = createSimpleModelApiRoute(courseController);

module.exports = courseApiRoute;