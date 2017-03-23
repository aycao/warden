const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const {createIntegerValidate} = require('../utils');

const {courseCodes} = require('../constants');
const courseNumberValidate = createIntegerValidate('courseCode');

const courseSchema = new Schema({
  courseCode: {type: String, enum: courseCodes},
  courseNumber: {type: Number, required: true, validate: courseNumberValidate, min: 1, max:9999},
  department: {type: Schema.Types.ObjectId, ref: 'Department', required: true},
  description: {type: String},
});

courseSchema.index({courseCode: 1, courseNumber: 1, department: 1}, {unique: true});

module.exports = mongoose.model('Course', courseSchema);