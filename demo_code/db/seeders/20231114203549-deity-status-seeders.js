'use strict';
const { DeityStatus } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //  await queryInterface.bulkInsert('DeityStatuses', [
  //     {name: 'god'},
  //     {name: 'demi-god'},
  //     {name: 'human'}
  //  ]);
      await DeityStatus.bulkCreate([
        {name: 'god'},
        {name: 'demi-god'},
        {name: 'human'}
      ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('DeityStatuses')
  }
};
