const db = require('../database/models');

module.exports = {
    async listProducts() {
        const products = await db.products.findAll();
        if (!products) {
          const error = new Error('Not found');
          error.name = 'NotFoundError';
          throw error;
        }
        return products;
      },
};
