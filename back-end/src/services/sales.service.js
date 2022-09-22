const db = require('../database/models');

module.exports = {
  async getAllSales(id) {
    const sales = await db.sales.findAll({ where: { userId: id } });

    if (!sales.length) {
      return { message: 'Você não possui nenhuma compra' };
    }

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

    if (!sale) {
      return { message: 'Compra não encontrada' };
    }

    return sale;
  },

  async updateStatus(id, status) {
    await db.sales.update(
      { status },
      { where: { id } },
    );
  },
};