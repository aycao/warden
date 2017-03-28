const moment = require('moment');

const {Class,
  ClassTime,
  ClassStudentRelation} = require('../models/classes');
const {SimpleController} = require('../utils');

const classController = new SimpleController(Class);
const classTimeController = new SimpleController(ClassTime);
const classStudentRelationController = new SimpleController(ClassStudentRelation);

const classDateTimeFormatValidate = (doc) => {
  // validate time/dates
  const startTime = moment(doc.startTime, 'HH:mm', true);
  const endTime = moment(doc.endTime, 'HH:mm', true);
  const startDate = moment(doc.startDate, 'YYYY-MM-DD', true);
  const endDate = moment(doc.endDate, 'YYYY-MM-DD', true);
  if(!startDate.isValid()){
    return false;
  }
  if(!endDate.isValid()){
    return false;
  }
  if(!startDate.isValid()){
    return false;
  }
  if(!endDate.isValid()){
    return false;
  }
  if(startTime >= endTime){
    return false;
  }
  if(startDate >= endDate){
    return false;
  }
  return true;
};

const classDateTimeSaveValidate = (doc) => {
  if(!doc.weekdays || !doc.startTime || !doc.endTime || !doc.startDate || !doc.endDate){
    return false
  }
  return classDateTimeFormatValidate(doc);;
};

classTimeController.create = (req, res, next) => {
  const obj = req.body;
  console.log(obj);
  if (!classDateTimeSaveValidate(obj)){
    return next(new Error('start/end time/date logic or format validation error'));
  }
  return ClassTime.create(obj)
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

classTimeController.update = (req, res, next) => {
  const id = req.params.id;
  const obj = req.body;
  if(!classDateTimeSaveValidate(obj)){
    return next(new Error('start/end time/date logic or format validation error'));
  }
  return ClassTime.findByIdAndUpdate(id, obj).exec()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        return next(err);
      });
};

module.exports = {classController, classTimeController, classStudentRelationController};