const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  type: {type: String, required: true},
  value: {type: String, required: true},
  primary: {type: Boolean, default: false}
});

module.exports = mongoose.model('Contact', contactSchema);