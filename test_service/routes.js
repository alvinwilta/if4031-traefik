'use strict';

const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
  console.log("Called 1")
  res.send({ message: 'Hello World!' });
});
module.exports = api;