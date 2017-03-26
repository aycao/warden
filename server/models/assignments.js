const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const {createIntegerValidate} = require('../utils');

const maxMarkIntegerValidate = createIntegerValidate('maxMark');

const assignmentSchema = new Schema({
  class: {type: Schema.Types.ObjectId, ref: 'Class'},
  prof: {type: Schema.Types.ObjectId, ref: 'Staff'},
  tas: [{type: Schema.Types.ObjectId, ref: 'Staff'}],
  link: {type: String},
  maxMark: {type: Number, validate: maxMarkIntegerValidate, min: 0},
  description: {type: String},
});

module.exports = mongoose.model('Assignment', assignmentSchema);