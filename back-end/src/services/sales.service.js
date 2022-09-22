const db = require('../database/models');

module.exports = {
  async getAllSales(id) {
    const sales = await db.sales.findAll({ where: { userId: id } });

    return sales;
  },

  async getSaleById(id) {
    const sale = await db.sales.findByPk(id, {
      include: [{
        as: 'seller',
        model: db.user,
        attributes: ['name'],
      }],
    });

    return sale;
  },

  async updateStatus(id, status) {
    await db.sales.update(
      { status },
      { where: { id } },
    );
  },
};