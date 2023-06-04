const express = require('express');
const router = require('./src/routers');
const bodyParser = require('body-parser')

require('dotenv').config();


const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router);

app.listen(port, () => {
  console.log('Express server listening on port', port);
});