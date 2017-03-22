const Contact = require('../models/contacts');
const {SimpleController} = require('../utils');

const contactController = new SimpleController(Contact);

module.exports = {contactController};