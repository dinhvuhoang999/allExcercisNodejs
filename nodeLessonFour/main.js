const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();

const routes = require('./src/routes');

const url = 'mongodb://127.0.0.1:27017/nodeLesson';

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(url)
  .then(() => console.log('mongodb connected'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log('listen', port);
});   