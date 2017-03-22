const School = require('../models/schools');
const {SimpleController} = require('../utils');

const schoolController = new SimpleController(School);
schoolController.findById = (req, res, next) => {
  const id = req.params.id;
  return School.findById(id)
      .populate('address')
      .populate('president')
      .populate('vps')
      .populate('departments')
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

module.exports = {schoolController};