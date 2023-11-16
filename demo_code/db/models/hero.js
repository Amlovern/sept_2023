'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hero.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    deityStatusId: DataTypes.INTEGER,
    famousFeatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    regionOfOrigin: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    weakness: DataTypes.STRING(125),
    mortalEnemy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearOfOrigin: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};