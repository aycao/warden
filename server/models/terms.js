const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const {createIntegerValidate} = require('../utils');

const {terms} = require('../constants');
const integerValidate = createIntegerValidate('term');

const termSchema = new Schema({
  year: {type: Number, required: true, validate: integerValidate, min: 2000, max: 2999},
  term: {type: String, enum: Object.keys(terms), required: true},
  description: {type: String},
});

termSchema.index({year: 1, term: 1}, {unique: true});

module.exports = mongoose.model('Term', termSchema);