const Product = require('../services/products.service');

module.exports = {
    async listProducts(_req, res) {
        const result = await Product.listProducts();
        
        return res.status(200).json(result);
    },
};
