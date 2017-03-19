const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


const {simpleErrorHandler} = require('./utils');
const apiRoutes = require('./apiRoutes');

const app = express();


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(simpleErrorHandler);
app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;