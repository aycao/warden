const mongoose = require('mongoose');
const dbLogin = require('./dbLogin');

mongoose.Promise = Promise;
mongoose.connect(dbLogin.address);
mongoose.connection.on('open', () => console.log('db connected'));

module.exports = mongoose;