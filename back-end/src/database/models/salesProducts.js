module.exports = (sequelize, DataTypes) => {
    const SalesProducts = sequelize.define('salesProducts', {
        saleId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
         },
         productId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
         },
         quantity: DataTypes.INTEGER,
    }, {
        tableName: 'salesProducts',
        timestamps: false,
    });

    SalesProducts.associate = (models) => {
        models.Products.belongsToMany(models.Sales, {
            as: 'sales',
            through: SalesProducts,
            foreignKey: 'productId',
            otherKey: 'saleId',
        });

        models.Sales.belongsToMany(models.Products, {
            as: 'products',
            through: SalesProducts,
            foreignKey: 'saleId',
            otherKey: 'productId',
        });
    };

    return SalesProducts;
};