const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const productsRoute = Router();

productsRoute.get('/products', productsController.listProducts);

module.exports = productsRoute;