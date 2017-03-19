const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {type: String, required: true},
  address: {type: Schema.ObjectId, ref: 'Address'},
  president: {type: Schema.ObjectId, ref: 'Staff'},
  vps: [{type: Schema.ObjectId, ref: 'Staff'}],
  departments: [{type: Schema.ObjectId, ref: 'Department'}],
});

module.exports = mongoose.model('School', schoolSchema);