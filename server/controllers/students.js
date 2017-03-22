const Student = require('../models/students');
const {SimpleController} = require('../utils');

const studentController = new SimpleController(Student);
studentController.findById = (req, res, next) => {
  Student.findById(req.params.id)
      .populate('address')
      .populate('contacts')
      .populate('parents')
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

module.exports = {studentController};