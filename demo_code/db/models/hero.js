'use strict';
const {
  Model,
  Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Hero.hasOne(models.FamousFeat, {
      //   foreignKey: 'famousFeatId'
      // });

      Hero.belongsTo(models.DeityStatus, {
        foreignKey: 'deityStatusId'
      });
      // FROM Heros
      // JOIN DeityStatuses ON (DeityStatuses.id = Heros.deityStatusId)
      
      Hero.belongsToMany(models.Ability, {
        through: models.HeroAbility,
        foreignKey: 'heroId',
        otherKey: 'abilityId'
      })
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
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
      // attributes: ['id', 'name', 'deityStatusId', 'famousFeatId', 'regionOfOrigin', 'weakness', 'mortalEnemy', 'yearOfOrigin']
    },
    scopes: {
      nameRegionYear: {
        attributes: ['name', 'regionOfOrigin', 'yearOfOrigin'],
        order: [['yearOfOrigin']]
      },
      orderByYear: {
        order: [['yearOfOrigin']]
      },
      maxAge(age) {
        // yearOfOrigin % value === 0
        let year = 2023 - age;
        return {
          where: {
            yearOfOrigin: {
              [Op.gte]: year
            }
          }
        };
      }
    }
  });
  return Hero;
};