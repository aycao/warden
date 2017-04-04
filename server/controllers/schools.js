const mongoose = require('mongoose');
const School = require('../models/schools');
const {SimpleController} = require('../utils');

const schoolController = new SimpleController(School);
schoolController.findById = (req, res, next) => {
  const id = req.params.id;
  return School.aggregate()
      .match({_id: mongoose.Types.ObjectId(id)})
      .lookup({
        from: 'departments',
        localField: '_id',
        foreignField: 'school',
        as: 'departments',
      })
      .lookup({
        from: 'students',
        localField: '_id',
        foreignField: 'school',
        as: 'students',
      })
      .project({
        name: 1,
        president: 1,
        vps: 1,
        address: 1,
        departmentCount: {$size: '$departments'},
        studentCount: {$size: '$students'},
        activeStudentCount: {$size: {$filter: {input: '$students', as: 'activeStudent', cond: {$eq: ['$$activeStudent.isActive', true]}}}},
        departments: 1,
      })
      .exec()
      .then(doc => {
        School.populate(doc, {path: 'address president', populate: {path: 'address'}})
            .then(doc => {
              res.json(doc[0])
            })
      })
      .catch(err => {
        next(err);
      });
};

module.exports = {schoolController};