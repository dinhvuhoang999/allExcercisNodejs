const app = require('express')();
const router = require('./src/routers')
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log('port', port);
});