const Parent = require('../models/parents');
const {SimpleController} = require('../utils');

const parentController = new SimpleController(Parent);
parentController.findById = (req, res, next) => {
  Parent.findById(req.params.id)
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

module.exports = {parentController};