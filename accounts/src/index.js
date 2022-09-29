'use strict';

const app = require('./app')
const config = require('./configDomain1');

app.listen(config.port, () => {
  console.log(`API REST running in http://localhost:${config.port}`);
});
