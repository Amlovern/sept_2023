'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ability.belongsToMany(models.Hero, {
        through: models.HeroAbility,
        foreignKey: 'abilityId',
        otherKey: 'heroId'
      })
    }
  }
  Ability.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Ability',
  });
  return Ability;
};