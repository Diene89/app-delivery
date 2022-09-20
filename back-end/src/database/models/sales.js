module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('sales', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
         },
         userId: DataTypes.INTEGER,
         sellerId: DataTypes.INTEGER,
         totalPrice: DataTypes.DECIMAL(9, 2),
         deliveryAddress: DataTypes.STRING,
         deliveryNumber: DataTypes.STRING,
         saleDate: DataTypes.DATE,
         status: DataTypes.STRING,
    }, {
        tableName: 'sales',
        timestamps: false,
    })

    Sales.associate = (models) => {
        Sales.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'user' },
            { foreignKey: 'sellerId', as: 'seller' },
        );
    };

    return Sales;
}