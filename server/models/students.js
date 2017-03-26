/**
 * Created by alfred on 2017-03-18.
 */

const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const {genders} = require('../constants');

const {createIntegerValidate} = require('../utils');

const ageIntegerValidate = createIntegerValidate('age');

const studentSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  department: {type: Schema.Types.ObjectId, ref: 'Department'},
  school: {type: Schema.Types.ObjectId, ref: 'School'},
  age: {type: Number, required: true, validate: ageIntegerValidate, min: 0, max: 200},
  gender: {type: String, enum: Object.keys(genders)},
  parents: [{type: Schema.Types.ObjectId, ref: 'Parent'}],
  contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
  dateAdded: {type: Date, default: Date.now, set: v => {return this.dateAdded || v}},
});

studentSchema.index({firstName: 1, lastName: 1, address: 1}, {unique: true});

module.exports = mongoose.model('Student', studentSchema);