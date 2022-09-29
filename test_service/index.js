'use strict';

const app = require('./app')
const app2 = require('./app2')
const config = require('./configDomain1');
const config2 = require('./configDomain2');

app.listen(config.port, () => {
  console.log(`API REST running in http://localhost:${config.port}`);
});

app2.listen(config2.port, () => {
  console.log(`API REST running in http://localhost:${config2.port}`);
});