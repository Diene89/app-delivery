module.exports = (sequelize, DataTypes) => {
    const Coupons = sequelize.define('coupons', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
         },
         company: DataTypes.STRING,
         rebate: DataTypes.INTEGER
    }, {
        tableName: 'coupons',
        timestamps: false,
    });

    return Coupons;
};
