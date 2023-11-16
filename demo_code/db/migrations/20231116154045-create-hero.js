'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      deityStatusId: {
        type: Sequelize.INTEGER
      },
      famousFeatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      regionOfOrigin: {
        type: Sequelize.STRING(75),
        allowNull: false
      },
      weakness: {
        type: Sequelize.STRING(125)
      },
      mortalEnemy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      yearOfOrigin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heros');
  }
};