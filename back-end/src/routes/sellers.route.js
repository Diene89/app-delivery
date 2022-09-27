const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');

const sellersRoute = Router();

sellersRoute.get('/', sellerController.getAllSellers);

module.exports = sellersRoute;