const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

const routers = require('./src/routers');
app.use(routers);

app.listen(port, () => {
  console.log('Listening on port', port);
});