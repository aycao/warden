const Assignment = require('../models/assignments');
const {SimpleController} = require('../utils');

const assignmentController = new SimpleController(Assignment);

module.exports = {assignmentController};