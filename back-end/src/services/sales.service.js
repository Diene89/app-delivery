const db = require('../database/models');
const jwtService = require('./utils/jwtService');

module.exports = {
  async getAllSales(token) {
    const { id } = jwtService.decodeToken(token);

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