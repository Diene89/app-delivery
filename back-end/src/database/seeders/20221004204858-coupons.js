'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('coupons', [
      { company: 'ivan15',rebate: 15 },
      { company: 'gelada10',rebate: 10 },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('coupons', null, {});
  }
};