'use strict';

const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

api.get('/user', (req, res) => {
  res.send({ message: 'Hello User!' });
});

api.post('/multiplication', (req, res) => {
  res.send({ message: `${req.body.first * req.body.second}` });
});

api.post('/division', (req, res) => {
  res.send({ message: `${req.body.first / req.body.second}` });
});

api.post('/register', (req, res) => {
  res.send({ message: `Registerd user ${req.body.name}` });
});

module.exports = api;