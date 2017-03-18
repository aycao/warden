const mongoose = require('../config/db');

const schoolSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
});

module.exports = mongoose.model('School', schoolSchema);