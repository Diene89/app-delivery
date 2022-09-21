const { Router } = require('express');
const registerController = require('../controllers/register.controller');

const registerRoute = Router();

registerRoute.post('/', registerController.create);

module.exports = registerRoute;