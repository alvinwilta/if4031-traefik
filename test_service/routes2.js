'use strict';

const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
  console.log("Called 2")
  res.send({ message: 'Hello World 2!' });
});

api.get('/user', (req, res) => {
  console.log("Called 2 User")
  res.send({ message: 'Hello User 2!' });
});
module.exports = api;