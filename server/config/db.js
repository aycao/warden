const mongoose = require('mongoose');
const dbLogin = require('./dbLogin');

mongoose.Promise = Promise;
mongoose.connect(dbLogin.address);
mongoose.connection.on('open', () => console.log('db connected'));

process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  mongoose.connection.close();
  mongoose.connection.on('close', () => {
    console.log('db disconnected');
    process.exit();
  });
});

module.exports = mongoose;