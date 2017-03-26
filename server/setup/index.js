const axios = require('axios');

const parents = require('./randomParents.json');
const students = require('./randomStudents.json');
const staffs = require('./randomStaff.json');

axios.defaults.headers.post['Content-Type'] = 'application/json';

// students.map((student, index) => {
//   axios.post('http://localhost:9000/api/students', student)
//       .then(() => {
//         console.log('posted: '+ index);
//       }).catch(err => {
//         console.log(err);
//   })
// });
let counter = 0;
let limit = 1000;
let interval = null;

const ping = () => {
  axios.get('http://localhost:9000/api/schools/58d1e005a458c4638ad960ee')
      .then(() => {
        console.log('success: ', counter);
      });
  if(counter >= limit){
    clearInterval(interval);
  }
  counter++;
};
interval = setInterval(ping, 5);




