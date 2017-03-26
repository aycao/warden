const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const {createIntegerValidate} = require('../utils');

const markIntegerValidate = createIntegerValidate('mark');

const assignmentMarkSchema = new Schema({
  assignment: {type: Schema.Types.ObjectId, ref: 'Assignment', required: true},
  student: {type: Schema.Types.ObjectId, ref: 'Student', required: true},
  markedBy: [{type: Schema.Types.ObjectId, ref: 'Staff', required: true}],
  mark: {type: Number, validate: markIntegerValidate, min: 0},
  feedBack: {type: String},
  notes: {type: String},
});

module.exports = mongoose.model('AssignmentMark', assignmentMarkSchema);