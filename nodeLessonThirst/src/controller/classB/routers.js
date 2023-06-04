const routers = require('express').Router();
const controllers = require('./controller');

const validateHandlerError = require('../../middleware/index')
const { checkValidate, checkValidateAddStudent } = require('./validate')

routers.get('/', controllers.getClassBs)
routers.post('/create-student-check', checkValidate, validateHandlerError, controllers.addStudentCheck)
routers.post('/create-student', checkValidateAddStudent, validateHandlerError, controllers.addNewStudent)

module.exports = routers;