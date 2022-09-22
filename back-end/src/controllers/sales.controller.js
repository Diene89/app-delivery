const salesService = require('../services/sales.service');
const jwtService = require('../services/utils/jwtService');

module.exports = {
  async getAllSales(req, res) {
    const { authorization } = req.headers;

    const sales = await salesService.getAllSales(authorization);

    return res.status(200).json(sales);
  },

  async getSaleById(req, res) {
    const { id } = req.params;

    const sale = await salesService.getSaleById(id);

    return res.status(200).json(sale);
  },

  async create(req, res) {
    const { id } = jwtService.validateToken(req.headers.authorization);
    console.log(req.body);
    const saleCreated = await salesService.create(id, req.body);
    return res.status(201).json(saleCreated);
  },
};