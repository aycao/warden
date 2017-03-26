const moment = require('moment');
const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const {createIntegerValidate} = require('../utils');
const {weekdays} = require('../constants');

const sectionIntegerValidate = createIntegerValidate('section');
const weekdayIntegerValidate = createIntegerValidate('weekday');

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
  if(!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(val.startTime)){
    throw new Error('ClassTime: startTime must be of form HH:mm');
  }
  if(!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(val.endTime)){
    throw new Error('ClassTime: endTime must be of form HH:mm');
  }
  if(!moment(val.startDate, 'YYYY-MM-DD', true).isValid()){
    throw new Error('ClassTime: startDate must be of form YYYY-MM-DD');
  }
  if(!moment(val.endDate, 'YYYY-MM-DD', true).isValid()){
    throw new Error('ClassTime: endDate must be of form YYYY-MM-DD');
  }

  return val;
};

Schema.Types.ClassTime = ClassTime;


const classSchema = new Schema({
  course: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
  term: {type: Schema.Types.ObjectId, ref: 'Term', required: true},
  section: {type: Number, validate: sectionIntegerValidate, min: 1, max: 99},
  classTimes: [{type: Schema.Types.ClassTime, required: true}],
  prof: {type: Schema.Types.ObjectId, ref: 'Staff'},
  tas: [{type: Schema.Types.ObjectId, ref: 'Staff'}],
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
  description: {type: String},
});

module.exports = mongoose.model('Class', classSchema);