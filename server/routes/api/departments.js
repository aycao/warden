const {createSimpleModelApiRoute} = require('../../utils');

const {departmentController, departmentStaffRoleRelationController} = require('../../controllers/departments');
const departmentApiRoute = createSimpleModelApiRoute(departmentController);
const departmentStaffRoleRelationApiRoute = createSimpleModelApiRoute(departmentStaffRoleRelationController);

module.exports = {
  departmentApiRoute,
  departmentStaffRoleRelationApiRoute,
};