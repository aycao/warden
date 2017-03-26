const Class = require('../models/classes');
const {SimpleController} = require('../utils');

const classController = new SimpleController(Class);

module.exports = {classController};