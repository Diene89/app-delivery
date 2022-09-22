const db = require('../database/models');

module.exports = {
  async getSalesByIdSeller(sellerId) {
    const salesBySeller = await db.sales.findAll({
      where: { sellerId },
      include: [
        { model: db.products, as: 'products' },
      ],
    });

    return salesBySeller;
  },
};