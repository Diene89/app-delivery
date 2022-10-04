'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rebate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('coupons');
  }
};
