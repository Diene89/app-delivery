const { Op } = require('sequelize');
const db = require('../database/models');
const jwtService = require('./utils/jwtService');

module.exports = {
  async getSalesBySeller(token) {
    const { id } = jwtService.decodeToken(token);

    const salesBySeller = await db.sales.findAll({
      where: { sellerId: id },
      include: [
        { model: db.products, as: 'products' },
      ],
    });

    if (!salesBySeller.length) {
      return { message: 'Você não possui nenhuma venda' };
    }

    return salesBySeller;
  },

  async getSaleByIdOrder(id) {
    const sale = await db.sales.findByPk(id, {
      include: [
        { model: db.products, as: 'products' },
      ],
    });

    if (!sale) {
      return { message: 'Venda não encontrada' };
    }

    return sale;
  },

  async getAllSellers() {
    const sellers = await db.user.findAll({ where: { role: {
      [Op.eq]: 'seller',
    } },
attributes: { exclude: ['password', 'email', 'role'] } });

    if (!sellers) return { message: 'Nenhuma pessoa vendedora encontrada' };

    return sellers;
  },
  
};