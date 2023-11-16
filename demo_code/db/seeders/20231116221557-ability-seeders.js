'use strict';
const { Ability } = require('../models')

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
   await Ability.bulkCreate([
    {name: 'super strength'},
    {name: 'lightning'},
    {name: 'transformation'},
    {name: 'invisibility'},
    {name: 'brings light to the world'},
    {name: 'Excalibur'}
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Abilities')
  }
};
