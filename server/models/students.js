/**
 * Created by alfred on 2017-03-18.
 */

const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  age: {type: Number, required: true, set: (v) => {return Math.round(v);}},
  gender: {type: String, validate: {validator:(v) => {return /^m$|^f$/.test(v);}}},
  parents: [{type: Schema.ObjectId, ref: 'Parent'}],
  contacts: [{type: Schema.ObjectId, ref: 'Contact'}],
  address: {type: Schema.ObjectId, ref: 'Address'},
});

module.exports = mongoose.model('Student', studentSchema);