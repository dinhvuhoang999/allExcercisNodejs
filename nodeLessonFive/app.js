const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const app = express();
const router = require('./src/routes')
require('dotenv').config();
const port = process.env.PORT || 8000;

mongoose.connect('mongodb://127.0.0.1:27017/NodeTestStudy')
  .then(() => console.log('Connected!')).catch((err) => console.log(err));

app.use(bodyParser.json())
app.use(router);


app.listen(port, () => {
  console.log('listen on port', port);
})