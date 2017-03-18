const mongoose = require('mongoose');
const dbLogin = require('./dbLogin');

mongoose.connect(dbLogin.address);

mongoose.connection.on('open', () => console.log('db connected'));

module.exports = mongoose;