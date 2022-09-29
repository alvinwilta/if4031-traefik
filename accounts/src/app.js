'use strict';
const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;