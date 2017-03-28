const mongoose = require('mongoose');
const {Department, DepartmentStaffRoleRelation} = require('../models/departments');

const {SimpleController} = require('../utils');

const departmentController = new SimpleController(Department);
departmentController.findById = (req, res, next) => {
  const id = req.params.id;
  return Department.aggregate()
      .match({_id: mongoose.Types.ObjectId(id)})
      .lookup({
        from: 'students',
        localField: '_id',
        foreignField: 'department',
        as: 'students'
      })
      .lookup({
        from: 'departmentstaffrolerelations',
        localField: '_id',
        foreignField: 'department',
        as: 'staff'
      })
      .project({
        studentCount: {$size: '$students'},
        activeStudentCount: {$size: {$filter: {input: '$students', as: 'activeStudent', cond: {$eq: ['$$activeStudent.isActive', true]}}}},
        staffCount: {$size: '$staff'},
        name: 1,
        chair: 1,
        school: 1,
        staff: 1,
      })
      .exec()
      .then(doc => {
        Department.populate(doc, {path: 'chair school'})
            .then(doc => {
              res.json(doc);
            });
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