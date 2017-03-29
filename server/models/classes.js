const moment = require('moment');
const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const {createIntegerValidate} = require('../utils');
const {weekdays} = require('../constants');

const sectionIntegerValidate = createIntegerValidate('section');
const weekdaysIntergerValidate = createIntegerValidate('weekday');
/*
function ClassTime(key, options){
  mongoose.SchemaType.call(this, key, options, 'ClassTime');
};
ClassTime.prototype = Object.create(mongoose.SchemaType.prototype);
ClassTime.prototype.cast = (val) => {
  // Must has keys: weekdays: Array
  //                startTime: String
  //                endTime: String
  //                startDate: String
  //                endDate: String
  if(!(typeof(val) === 'object')){
    throw new Error('ClassTime: ClassTime must be an object, but got ' + typeof(val));
  }
  if(!Array.isArray(val.weekdays)){
    throw new Error('ClassTime: ClassTime object must contain attribute weekdays as Array, but got ' + typeof(val.weekdays));
  }
  if(!(typeof(val.startTime) === 'string')){
    throw new Error('ClassTime: ClassTime object must contain attribute startTime as string, but got ' + typeof(val.startTime));
  }
  if(!(typeof(val.endTime) === 'string')){
    throw new Error('ClassTime: ClassTime object must contain attribute endTime as string, but got ' + typeof(val.endTime));
  }
  if(!(typeof(val.startDate) === 'string')){
    throw new Error('ClassTime: ClassTime object must contain attribute startDate as string, but got ' + typeof(val.startDate));
  }
  if(!(typeof(val.endDate) === 'string')){
    throw new Error('ClassTime: ClassTime object must contain attribute endDate as string, but got ' + typeof(val.endDate));
  }
  // validate weekdays
  const weekdayIndexes = Object.keys(weekdays);
  if(val.weekdays.some(weekday => {return !weekdayIndexes.includes(weekday);})){
    throw new Error('ClassTime: entries of weekdays must be one of "'+ weekdayIndexes.join((', ')) + '"');
  }
  // validate time/dates
  const startTime = moment(val.startTime, 'HH:mm', true);
  const endTime = moment(val.endTime, 'HH:mm', true);
  const startDate = moment(val.startDate, 'YYYY-MM-DD', true);
  const endDate = moment(val.endDate, 'YYYY-MM-DD', true);
  if(!startDate.isValid()){
    throw new Error('ClassTime: startTime must be of form HH:mm');
  }
  if(!endDate.isValid()){
    throw new Error('ClassTime: endTime must be of form HH:mm');
  }
  if(!startDate.isValid()){
    throw new Error('ClassTime: startDate must be of form YYYY-MM-DD');
  }
  if(!endDate.isValid()){
    throw new Error('ClassTime: endDate must be of form YYYY-MM-DD');
  }
  if(startTime <= endTime){
    throw new Error('ClassTime: startTime must be older then endTime');
  }
  if(startDate <= endDate){
    throw new Error('ClassTime: startDate must be older then endDate');
  }

  return val;
};

mongoose.Schema.Types.ClassTime = ClassTime;
*/

const startEndTimeValidate = {
  validator: (v) => {
    return moment(v, 'HH:mm', true).isValid();
  },
  message: "start/endTime must be of form HH:mm"
};
const startEndDateValidate = {
  validator: (v) => {
    return moment(v, 'YYYY-MM-DD', true).isValid();
  },
  message: "start/endDate must be of form YYYY-MM-DD"
};

// ClassTime
const classTimeSchema = new Schema({
  class: {type: Schema.Types.ObjectId, ref: 'Class'},
  weekdays: [{type: Number, required: true, validate: weekdaysIntergerValidate, min: 0, max: 6}],
  startTime: {type: String, required: true, validate: startEndTimeValidate},
  endTime: {type: String, required: true, validate: startEndTimeValidate},
  startDate: {type: String, required: true, validate: startEndDateValidate},
  endDate: {type: String, required: true, validate: startEndDateValidate},
});
const ClassTime = mongoose.model('ClassTime', classTimeSchema);

// ClassStudentRelation
const classStudentRelationSchema = new Schema({
  class: {type: Schema.Types.ObjectId, ref: 'Class', required: true},
  student: {type: Schema.Types.ObjectId, ref: 'Student', required: true},
});
classStudentRelationSchema.index({class: 1, student: 1}, {unique: true});
const ClassStudentRelation = mongoose.model('ClassStudentRelation', classStudentRelationSchema);

// Class
const classSchema = new Schema({
  course: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
  term: {type: Schema.Types.ObjectId, ref: 'Term', required: true},
  section: {type: Number, validate: sectionIntegerValidate, min: 1, max: 99},
  prof: {type: Schema.Types.ObjectId, ref: 'Staff'},
  tas: [{type: Schema.Types.ObjectId, ref: 'Staff'}],
  description: {type: String},
});
classSchema.index({course: 1, term: 1, section: 1, classTime: 1}, {unique: true});
const Class = mongoose.model('Class', classSchema);

module.exports = {
  Class,
  ClassTime,
  ClassStudentRelation,
};