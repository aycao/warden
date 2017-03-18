const School = require('../models/schools');

const findAll = () => {
  School.find((err, all) => {return all});
};

module.exports = {findAll};