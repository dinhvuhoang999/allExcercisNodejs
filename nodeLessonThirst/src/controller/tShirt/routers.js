const routers = require('express').Router();
const controllers = require('./controller');

const validateHandlerError = require('../../middleware')
const { checkValidate } = require('./validate')

routers.get('/', controllers.getTShirts)
routers.post('/create-t-shirt', checkValidate, validateHandlerError, controllers.createTShirt)

module.exports = routers;