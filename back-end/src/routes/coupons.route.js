const { Router } = require('express');
const couponsController = require('../controllers/coupons.controller');

const couponsRoute = Router();

couponsRoute.post('/', couponsController.findCoupon );

module.exports = couponsRoute;
