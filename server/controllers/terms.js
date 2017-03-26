const Term = require('../models/terms');
const {SimpleController} = require('../utils');

const termController = new SimpleController(Term);

module.exports = {termController};