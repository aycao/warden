const AssignmentMark = require('../models/assignmentMarks');
const {SimpleController} = require('../utils');

const assignmentMarkController = new SimpleController(AssignmentMark);

module.exports = {assignmentMarkController};