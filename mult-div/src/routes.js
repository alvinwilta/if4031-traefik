"use strict";

const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

api.get("/whoami", (req, res) => {
  res.status(200).send(`mult-div instance number ${process.env.id}`);
});

api.post("/mult", (req, res) => {
  res.status(200).send(`${req.body.x * req.body.y}`);
});

api.post("/div", (req, res) => {
  res.status(200).send(`${req.body.x / req.body.y}`);
});

module.exports = api;
