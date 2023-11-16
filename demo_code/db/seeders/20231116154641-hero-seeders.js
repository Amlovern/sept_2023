'use strict';
const { Hero } = require('../models')

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
   await Hero.bulkCreate([
    {
      name: 'Hercules',
      deityStatusId: 2,
      famousFeatId: 6,
      regionOfOrigin: 'Rome',
      weakness: 'temper',
      mortalEnemy: 'Antaeus',
      yearOfOrigin: -1286
    },
    {
      name: 'Thor',
      deityStatusId: 1,
      famousFeatId: 3,
      regionOfOrigin: 'Norse',
      weakness: 'certain magics',
      mortalEnemy: 'Loki',
      yearOfOrigin: 50
    },
    {
      name: 'Horus',
      deityStatusId: 1,
      famousFeatId: 5,
      regionOfOrigin: 'Egypt',
      weakness: 'women',
      mortalEnemy: 'Set',
      yearOfOrigin: -2925
    },
    {
      name: 'King Arthur',
      deityStatusId: 3,
      famousFeatId: 7,
      regionOfOrigin: 'British Isles',
      weakness: 'glory hungry',
      mortalEnemy: 'Mordred',
      yearOfOrigin: 475
    },
    {
      name: 'Beowulf',
      deityStatusId: 3,
      famousFeatId: 8,
      regionOfOrigin: 'Norse',
      weakness: 'arrogance',
      mortalEnemy: 'Grendel',
      yearOfOrigin: 1000
    },
    {
      name: 'Amaterasu',
      deityStatusId: 1,
      famousFeatId: 1,
      regionOfOrigin: 'Japan',
      weakness: 'none',
      mortalEnemy: 'Arahabaki',
      yearOfOrigin: 712
    },
    {
      name: 'Achilles',
      deityStatusId: 3,
      famousFeatId: 4,
      regionOfOrigin: 'Greece',
      weakness: 'bad ankle',
      mortalEnemy: 'Paris',
      yearOfOrigin: -400
    }
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Heros')
  }
};
