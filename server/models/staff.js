const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const {genders} = require('../constants');

const {createIntegerValidate} = require('../utils');

const ageIntegerValidate = createIntegerValidate('age');

const staffSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  age: {type: Number, validate: ageIntegerValidate, min: 0, max: 200},
  gender: {type: String, enum: Object.keys(genders)},
  contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
});

staffSchema.index({firstName: 1, lastName: 1, address: 1}, {unique: true});

module.exports = mongoose.model('Staff', staffSchema);