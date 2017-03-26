const {Department, DepartmentStaffRoleRelation} = require('../models/departments');
const {SimpleController} = require('../utils');

const departmentController = new SimpleController(Department);
departmentController.findById = (req, res, next) => {
  const id = req.params.id;
  return Department.findById(id)
      .populate({path: 'chair', populate: [{path: 'contacts', select: 'type value primary -_id'}, {path: 'address'}]})
      .populate({path: 'staff', populate: {path: 'staff', select: 'firstName lastName'}})
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

const departmentStaffRoleRelationController = new SimpleController(DepartmentStaffRoleRelation);
departmentStaffRoleRelationController.findById = (req, res, next) => {
  const id = req.params.id;
  return DepartmentStaffRoleRelation.findById(id)
      .populate('staff')
      .populate('department')
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

module.exports = {
  departmentController,
  departmentStaffRoleRelationController,
};