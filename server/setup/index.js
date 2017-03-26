const axios = require('axios');

const parents = require('./randomParents.json');
const students = require('./randomStudents.json');
const staffs = require('./randomStaff.json');

axios.defaults.headers.post['Content-Type'] = 'application/json';

students.map((student, index) => {
  axios.post('http://localhost:9000/api/students', student)
      .then(() => {
        console.log('posted: '+ index);
      }).catch(err => {
        console.log(err);
  })
});



