const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
const genders = {
  m: 'male', f: 'female', n: 'natural', p: 'prefer not to tell',
};
const terms = {
  w: 'Winter',
  s: 'Spring',
  f: 'Fall',
};
const weekdays = {
  0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday',
  4: 'Thursday', 5: 'Friday', 6: 'Saturday',
};
const contactTypes = {
  phone: 'Phone', email: 'Email', wechat: 'WeChat'
};
const courseCodes = [
    'AAA', 'ABC',
    'BBB',
    'CCC',
    'DDD',
    'EEE', 'ECE',
    'FFF', 'FUNK',
    'GGG', 'GIRL',
    'HHH', 'HELP',
    'III', 'ILOVEU',
    'JJJ',
    'KKK', 'KO',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

module.exports = {
  contactTypes,
  courseCodes,
  genders,
  provinces,
  terms,
  weekdays,
};



const student =[
  '{{repeat(200)}}',
  {
    firstName: '{{firstName()}}',
    lastName: '{{lastName()}}',
    isActive: '{{bool()}}',
    department: '{{random("", "")}}',
    school: '58d1e005a458c4638ad960ee',
    age: '{{integer(10, 23)}}',
    gender: '{{random("m", "f")}}',
    parents: ['{{repeat(1,2)}}', '{{random("a", "b")}}'],
    contacts: ['{{repeat(0,3)}}', '{{random("c", "d")}}'],
    address: '{{random("", "")}}',
    dateAdded: '{{date(new Date(2017, 1, 1), new Date(2017, 3, 20))}}'
  }
];

const contact = [
  '{{repeat(200)}}',
  {
    type: '{{random("phone", "email", "wechat")}}',
    randomEmail: '{{email(true)}}',
    randomWechat: '{{lorem(1, "words")}}',
    randomPhone: '{{phone("xxx-xxx-xxxx")}}',
    value: function(){
      if(this.type==="phone"){return this.randomPhone;};
      if(this.type==="email"){return this.randomEmail;};
      if(this.type==="wechat"){return this.randomWechat;};
    },
    primary: '{{bool()}}'
  }
];

const address = [
  '{{repeat(200)}}',
  {
    streetNumber: '{{integer(1, 2000)}}',
    street: '{{street()}}',
    city: '{{city()}}',
    province: '{{random("AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT")}}'
  }
];

const parents = [
  '{{repeat(200)}}',
  {
    gender: '{{random("m", "f")}}',
    age: '{{integer(20, 50)}}',
    femaleFirstName: '{{firstName("female")}}',
    maleFirstName: '{{firstName("male")}}',
    firstName: function(){return this.gender==='m'?this.maleFirstName:this.femaleFirstName;},
    lastName: '{{surname()}}',
    contacts: ['{{repeat(0,3)}}', '{{random("c", "d")}}'],
    address: '{{random("", "")}}'
  }
]




