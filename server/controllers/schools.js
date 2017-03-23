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
      .exec()
      .then(doc => {
        School.populate(doc, {path: 'address president', populate: {path: 'address'}})
            .then(doc => {
              res.json(doc)
            })
      })
      .catch(err => {
        next(err);
      });
};

module.exports = {schoolController};