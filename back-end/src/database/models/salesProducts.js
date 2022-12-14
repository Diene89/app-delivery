module.exports = (sequelize, DataTypes) => {
    const SalesProducts = sequelize.define('salesProducts', {
        saleId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            field: 'sale_id'
         },
         productId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            field: 'product_id'
         },
         quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
         },
    }, {
        tableName: 'sales_products',
        timestamps: false,
    });

    SalesProducts.associate = (models) => {
        models.products.belongsToMany(models.sales, {
            as: 'sales',
            through: SalesProducts,
            foreignKey: 'productId',
            otherKey: 'saleId',
        });

        models.sales.belongsToMany(models.products, {
            as: 'products',
            through: SalesProducts,
            foreignKey: 'saleId',
            otherKey: 'productId',
        });
    };

    return SalesProducts;
};