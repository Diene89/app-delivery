const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRoute = Router();

salesRoute.get('/', salesController.getAllSales);
salesRoute.get('/:id', salesController.getSaleById);

module.exports = salesRoute;