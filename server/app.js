const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


const {apiErrorHandler, simpleErrorHandler} = require('./utils');
const apiRoutes = require('./routes/api');

const app = express();

// Setup
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API route
app.use('/api', apiRoutes);
app.use(apiErrorHandler);

// UI route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Error handler
app.use(simpleErrorHandler);

module.exports = app;