const axios = require('axios');

const parents = require('./randomParents.json');
const students = require('./randomStudents.json');
const staffs = require('./randomStaff.json');
const courses = require('./uwCourseDump.json');

axios.defaults.headers.post['Content-Type'] = 'application/json';

// students.map((student, index) => {
//   axios.post('http://localhost:9000/api/students', student)
//       .then(() => {
//         console.log('posted: '+ index);
//       }).catch(err => {
//         console.log(err);
//   })
// });

console.log(courses.length);

for (let index = 0, length = courses.length; index < length; index++) {
  if(index % 50 === 0){
    let course = courses[index];
    course.courseCode = course.subject;
    course.courseNumber = course.catalog_number;
    course.department = '58d1c545b82f78607cd8feed';
    axios.post('http://localhost:9000/api/courses/', course).then(() => {
      console.log('posted: ' + index);
    }).catch(err => {
      console.log(err);
    });
  }
}



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

// interval = setInterval(ping, 5);




