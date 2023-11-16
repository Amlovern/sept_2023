'use strict';
const { FamousFeat } = require('../models')

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
   await FamousFeat.bulkCreate([
    {feat: 'created the imperial regalia'},
    {feat: 'gave fire to humans'},
    {feat: 'lifted Mjolnir'},
    {feat: 'slaying the trojan prince'},
    {feat: 'became a pharaoh of Egypt'},
    {feat: 'defeated the hydra'},
    {feat: 'pulled Excalibur from the stone'},
    {feat: 'killed Grendel'}
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('FamousFeats')
  }
};
