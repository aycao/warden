const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {type: String, required: true},
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
  president: {type: Schema.Types.ObjectId, ref: 'Staff'},
  vps: [{type: Schema.Types.ObjectId, ref: 'Staff'}],
  departments: [{type: Schema.Types.ObjectId, ref: 'Department'}],
});

schoolSchema.index({name: 1, address: 1}, {unique: true});

module.exports = mongoose.model('School', schoolSchema);