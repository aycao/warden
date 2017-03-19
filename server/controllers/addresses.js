const Address = require('../models/addresses');
const {SimpleController} = require('../utils');

const addressController = new SimpleController(Address);

module.exports = {addressController};