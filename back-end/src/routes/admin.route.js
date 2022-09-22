const { Router } = require('express');
const adminController = require('../controllers/admin.controller');

const adminRoute = Router();

adminRoute.post('/manage', adminController.create);
adminRoute.get('/manage', adminController.getAllUsers);

module.exports = adminRoute;