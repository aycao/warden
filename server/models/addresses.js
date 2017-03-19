const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
const postalCodeValidator = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;

const addressSchema = new Schema({
  streetNumber: {type: Number, required: true, validate: {validator: v => {return Number.isInteger(v)}}},
  street: {type: String, required: true},
  city: {type: String},
  province: {type: String, validate: {validator: (v) => provinces.includes(v)}},
  postalCode: {type: String, validate: {validator: (v) => {return postalCodeValidator.test(v)}}},
});

module.exports = mongoose.model('Address', addressSchema);