const db = require('../database/models');

module.exports = {
  async getAllSales(id) {
    const sales = await db.sales.findAll({ where: { userId: id } });

    return sales;
  },
};