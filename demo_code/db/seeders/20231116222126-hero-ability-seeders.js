'use strict';
const { HeroAbility } = require('../models')

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
   await HeroAbility.bulkCreate([
    {heroId: 1, abilityId: 1},
    {heroId: 2, abilityId: 2},
    {heroId: 3, abilityId: 3},
    {heroId: 4, abilityId: 6},
    {heroId: 5, abilityId: 1},
    {heroId: 6, abilityId: 5},
    {heroId: 7, abilityId: 1},
    {heroId: 2, abilityId: 1},
    {heroId: 5, abilityId: 4},
    {heroId: 3, abilityId: 2},
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('HeroAbilities')
  }
};
