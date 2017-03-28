const Course = require('../models/courses');
const {SimpleController} = require('../utils');

const courseController = new SimpleController(Course);

courseController.sort = {courseCode: 1, courseNumber: 1};
courseController.findById = (req, res, next) => {
  const id = req.params.id;
  return Course.findById(id)
      .populate({path: 'department', select: 'name'})
      .exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

module.exports = {courseController};