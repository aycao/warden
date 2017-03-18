const School = require('../models/schools');
const {SimpleController} = require('../utils');

const schoolController = new SimpleController(School);

module.exports = {schoolController};