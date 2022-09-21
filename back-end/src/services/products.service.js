const { Product } = require('../database/models/products')

module.exports = {
    async listProducts() {
        const products = await Product.findAll();
           
        return products;
      }
}
