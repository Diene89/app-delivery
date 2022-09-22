const { sales, salesProducts, products, sequelize, user } = require('../database/models');

const jwtService = require('./utils/jwtService');

module.exports = {
    async checkoutNewSale(data, productCart) {
     
        const newSale = await sales.create(data);
        console.log(newSale, 'me deixaaaaaaa');
  
        const arrayProduct = productCart.map((item) => ({
            saleId: newSale.dataValues.id, productId: item.id, quantity: item.quantity
        }))

        await salesProducts.bulkCreate(arrayProduct);


        return newSale;
    },

  async getAllSales(token) {
    const { id } = jwtService.decodeToken(token);

    const sales = await sales.findAll({ where: { userId: id } });

    if (!sales.length) {
      return { message: 'Você não possui nenhuma compra' };
    }

    return sales;
  },

  async getSaleById(id) {
    const sale = await sales.findByPk(id, {
      include: [{
        as: 'seller',
        model: user,
        attributes: ['name'],
      }],
    });

    if (!sale) {
      return { message: 'Compra não encontrada' };
    }

    return sale;
  },

  async updateStatus(id, status) {
    await sales.update(
      { status },
      { where: { id } },
    );
  },
};

