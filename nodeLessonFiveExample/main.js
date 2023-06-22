const express = require('express');

const mongoose = require('mongoose');

const router = require('./src/routes')
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/NodeTestStudy').then(() =>
  console.log('success in connect')
).catch((err) => console.log(err))

const app = express();
app.use(express.json())
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('listen on port', port);
})