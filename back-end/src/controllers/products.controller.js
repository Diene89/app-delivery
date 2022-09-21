const Product = require('../services/products.service')

module.exports = {
    async listProducts(req, res) {
        const result = await Product.listProducts();
      
        return res.status(200).json(result);
    }
}
