const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const {contactTypes} = require('../constants');

const contactSchema = new Schema({
  type: {type: String, required: true, enum: Object.keys(contactTypes)},
  value: {type: String, required: true},
  primary: {type: Boolean, default: false}
});

contactSchema.index({type: 1, value: 1}, {unique: true});

module.exports = mongoose.model('Contact', contactSchema);