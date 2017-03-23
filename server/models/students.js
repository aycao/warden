/**
 * Created by alfred on 2017-03-18.
 */

const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  department: {type: Schema.Types.ObjectId, ref: 'Department'},
  age: {type: Number, required: true, set: (v) => {return Math.round(v);}},
  gender: {type: String, match: /^m$|^f$/},
  parents: [{type: Schema.Types.ObjectId, ref: 'Parent'}],
  contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
  dateAdded: {type: Date, default: Date.now, set: v => {return this.dateAdded}},
});

studentSchema.index({firstName: 1, lastName: 1, address: 1}, {unique: true});

module.exports = mongoose.model('Student', studentSchema);