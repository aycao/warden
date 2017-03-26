const Course = require('../models/courses');
const {SimpleController} = require('../utils');

const courseController = new SimpleController(Course);

module.exports = {courseController};