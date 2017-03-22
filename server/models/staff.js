const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  age: {type: Number, required: true, set: (v) => {return Math.round(v);}},
  gender: {type: String, match: /^m$|^f$/},
  contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
});

staffSchema.index({firstName: 1, lastName: 1, address: 1}, {unique: true});

module.exports = mongoose.model('Staff', staffSchema);