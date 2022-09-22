const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRoute = Router();

salesRoute.get('/', salesController.getAllSales);

module.exports = salesRoute;