const Staff = require('../models/staff');
const {SimpleController} = require('../utils');

const staffController = new SimpleController(Staff);
staffController.findById = (req, res, next) => {
  Staff.findById(req.params.id)
      .populate('address')
      .populate('contacts')
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};


module.exports = {staffController};