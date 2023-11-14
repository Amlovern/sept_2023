'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeityStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeityStatus.init({
    name: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'DeityStatus',
  });
  return DeityStatus;
};