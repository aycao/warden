const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const {createIntegerValidate} = require('../utils');

const {provinces} = require('../constants');
const postalCodeValidator = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;
const streetNumberValidate = createIntegerValidate('streetNumber');

const addressSchema = new Schema({
  streetNumber: {type: Number, required: true, validate: streetNumberValidate},
  street: {type: String, required: true},
  city: {type: String},
  province: {type: String, enum: provinces},
  postalCode: {type: String, match: postalCodeValidator},
});

addressSchema.index({streetNumber: 1, street: 1, city: 1}, {unique: true});

module.exports = mongoose.model('Address', addressSchema);