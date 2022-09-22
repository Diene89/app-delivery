const salesService = require('../services/sales.service');

module.exports = {
  async getAllSales(req, res) {
    const { id } = req.body;

    const sales = await salesService.getAllSales(id);

    return res.status(200).json(sales);
  },

  async getSaleById(req, res) {
    const { id } = req.params;

    const sale = await salesService.getSaleById(id);

    return res.status(200).json(sale);
  },
};