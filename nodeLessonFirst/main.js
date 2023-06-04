const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./src/routers');

const port = process.env.PORT || 8000;

app.use(router);

app.listen(port, () => {
  console.log('run localhost', port);
})